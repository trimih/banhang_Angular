import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Giohang } from '../giohang';
import { SanphamService } from '../../sanpham/sanpham.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Sanpham } from '../../sanpham/sanpham';
import { GiohangService } from '../giohang.service';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-indexgh',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderComponent],
  templateUrl: './indexgh.component.html',
  styleUrl: './indexgh.component.css'
})
export class IndexghComponent {
  Giohangs: Giohang[]=[];
  id!:string;


  
  constructor(public sanphamService:SanphamService,private route:ActivatedRoute, public giohangService:GiohangService,private router:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['SpId'];
    if(this.id!=null){
      this.sanphamService.findSanpham(this.id).subscribe((data: Sanpham)=>{
        this.Themgiohang(data);
      })
    }else{
      var x = sessionStorage.getItem("giohang");
      if(x==null){
       this.Giohangs = [];
      }else{
        this.Giohangs = JSON.parse(x);
      }
    }
  }
  tongtien() {
    return this.Giohangs.reduce((total, gh) => total + (gh.giasp * gh.soluong), 0);
  }

kiemtragiohang(id:string){
  for(let i=0;i<this.Giohangs.length;i++){
    if(this.Giohangs[i].id==id){
      return i;
    }
  }
  return -1;
}

  Themgiohang(data:Sanpham){
    var x = sessionStorage.getItem("giohang");
    if(x==null){
      this.Giohangs = [];
     }else{
       this.Giohangs = JSON.parse(x);
     }
     var gh: Giohang;
     gh = {id: data._id,tensp: data.name,soluong: 1,giasp: data.price,hinhsp:data.image};
     let vitri = this.kiemtragiohang(data._id);
     if(vitri==-1){
      this.Giohangs.push(gh); 
     }else{
      this.Giohangs[vitri].soluong++;
     }
     sessionStorage.setItem("giohang",JSON.stringify(this.Giohangs));
  }
  getgiohang(){
    return this.Giohangs;
  }
  decreate(id:string){
    var x = sessionStorage.getItem("giohang");
    if(x==null){
      this.Giohangs = [];
     }else{
       this.Giohangs = JSON.parse(x);
     }
     let vitri = this.kiemtragiohang(id);
     if(this.Giohangs[vitri].soluong<=1){
      this.Giohangs[vitri].soluong=1;
     }else{
      this.Giohangs[vitri].soluong--;
    }
     
     sessionStorage.setItem("giohang",JSON.stringify(this.Giohangs));
  }
  increate(id:string){
    var x = sessionStorage.getItem("giohang");
    if(x==null){
      this.Giohangs = [];
     }else{
       this.Giohangs = JSON.parse(x);
     }
     this.sanphamService.findSanpham(this.id).subscribe((data: Sanpham)=>{
      let vitri = this.kiemtragiohang(id);
      if(this.Giohangs[vitri].soluong >= data.quality){
       this.Giohangs[vitri].soluong=data.quality; 
      }else{
        this.Giohangs[vitri].soluong++;
      } 
     sessionStorage.setItem("giohang",JSON.stringify(this.Giohangs));
    })
     
  }

  //xóa giohang
  xoagiohang(id: string) {
    let vitri = this.kiemtragiohang(id);
    if (vitri != -1) {
      this.Giohangs.splice(vitri, 1); // Xóa sản phẩm tại vị trí tìm thấy
      sessionStorage.setItem("giohang", JSON.stringify(this.Giohangs)); // Cập nhật sessionStorage
    }
  }
  guimail(donhangs: any) {
    this.giohangService.guimail(donhangs).subscribe((data: any) => {
      // sessionStorage.removeItem('donhangs');
      console.log(data);
    });
  }
   thanhtoan(){if (this.Giohangs.length === 0) {
    // Thông báo cho người dùng rằng giỏ hàng đang trống
    // Có thể sử dụng một thành phần thông báo
    alert('Giỏ hàng của bạn đang trống!');
    return;
  }
    this.taoDonHang();
    const storedDonhangs = sessionStorage.getItem("donhangs");
    if (storedDonhangs) {
      const donhangs = JSON.parse(storedDonhangs);
      this.guimail(donhangs);
   }
  }
   taoDonHang() {
    const donHang = {
      id: Date.now().toString(),
      sanphams: this.Giohangs,
      tongTien: this.tongtien(),
      ngayTao: new Date(),
      trangThai: 'Đang xử lý'
    };

    // Lưu đơn hàng vào session storage
    let donhangs = sessionStorage.getItem("donhangs");
    let danhSachDonHang = donhangs ? JSON.parse(donhangs) : [];
    danhSachDonHang.push(donHang);
    sessionStorage.setItem("donhangs", JSON.stringify(danhSachDonHang));
    console.log(danhSachDonHang);
    // sessionStorage.removeItem("donhangs");
    // Thông báo và điều hướng
    alert('Đơn hàng đã được tạo thành công!');
    this.Giohangs = [];
    // sessionStorage.removeItem('giohang');
    this.router.navigate(['/sanpham/indexsp']);
  }
}
