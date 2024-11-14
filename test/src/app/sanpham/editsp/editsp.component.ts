import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Danhmuc } from '../../danhmuc/danhmuc';
import { Sanpham } from '../sanpham';
import { DanhmucService } from '../../danhmuc/danhmuc.service';
import { SanphamService } from '../sanpham.service';

@Component({
  selector: 'app-editsp',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './editsp.component.html',
  styleUrl: './editsp.component.css'
})
export class EditspComponent {
  form!: FormGroup;
  id!: string;
  danhmuc:Danhmuc[] = [];
  sanpham!: Sanpham;

  constructor(public danhmucService:DanhmucService,
     private router: Router,private route: ActivatedRoute,
     private sanphamService: SanphamService){ // Inject the SanphamService
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['SpId'];
    this.sanphamService.findSanpham(this.id).subscribe((data: Sanpham) => {
      this.sanpham = data;
      this.form.patchValue(this.sanpham); // Cập nhật form với dữ liệu nhận được
    });

    this.form = new FormGroup({
      id_danhmuc:new FormControl('',[Validators.required]),
      name: new FormControl('', [Validators.required]),
      quality: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
    this.danhmucService.getAllDanhmuc().subscribe((data:Danhmuc[])=>{
      this.danhmuc = data;
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.sanphamService.updateSanpham(this.id, this.form.value).subscribe((res: any) => {
      // Điều hướng đến một trang tạm thời trước
      this.router.navigateByUrl('/sanpham/temp').then(() => {
        // Sau đó điều hướng về trang danh sách danh mục
        this.router.navigateByUrl('/sanpham/indexdm');
      });
    });
  }
}
