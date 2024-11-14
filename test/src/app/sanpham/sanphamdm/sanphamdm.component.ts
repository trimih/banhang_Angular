import { Component, OnInit } from '@angular/core';
import { Sanpham } from '../sanpham';
import { SanphamService } from '../sanpham.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sanphamdm',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule],
  templateUrl: './sanphamdm.component.html',
  styleUrl: './sanphamdm.component.css'
})
export class SanphamByDanhmucComponent implements OnInit {
  sanpham: Sanpham[] = [];
  id!:string;
  constructor(private sanphamService: SanphamService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['SpId'];
    if(this.id!=null)
      this.sanphamService.findSanpham(this.id).subscribe((data: Sanpham)=>{
        this.getSanphamByDanhmuc(this.id);
      })

}
getSanphamByDanhmuc(id: string) {
    this.sanphamService.getSanphamByDanhmuc(this.id).subscribe((data: Sanpham[]) => {
      this.sanpham = data; // Gán dữ liệu nhận được vào biến sanpham để sử dụng trong template
    });
  }
}