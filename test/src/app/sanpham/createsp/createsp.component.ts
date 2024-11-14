
import { DanhmucService } from './../../danhmuc/danhmuc.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Danhmuc } from '../../danhmuc/danhmuc';
import { SanphamService } from '../../sanpham/sanpham.service'; // Import the SanphamService

@Component({
  selector: 'app-createsp',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './createsp.component.html',
  styleUrls: ['./createsp.component.css']
})
export class CreatespComponent {
  form!:FormGroup;
  danhmuc:Danhmuc[] = [];
  constructor(public danhmucService:DanhmucService, private router: Router, route:ActivatedRoute, private sanphamService: SanphamService){ // Inject the SanphamService
    
  }

  ngOnInit(): void {
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
  
  get f(){
    return this.form.controls; //lấy tất cả các control trong form
  }
  submit(){
    if (this.form.valid) {
      this.sanphamService.createSanpham(this.form.value).subscribe((data) => {
        console.log('Product created successfully');
        this.router.navigate(['/sanpham/viewsp']); // Navigate to home page after successful creation
      }, (error) => {
        console.log('Error occurred while creating product');
      });
    }
  }
}