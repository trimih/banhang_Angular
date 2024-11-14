import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DanhmucService } from '../danhmuc.service';
import { Danhmuc } from '../danhmuc';

@Component({
  selector: 'app-createdm',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './createdm.component.html',
  styleUrl: './createdm.component.css'
})
export class CreatedmComponent {
  form!:FormGroup;
  danhmuc:Danhmuc[]=[];
  constructor(public danhmucService:DanhmucService,private router:Router){}


  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required]),
    })
  }

  get f(){
    return this.form.controls;
  }
  submit(){
    this.danhmucService.createDanhmuc(this.form.value).subscribe((res:any)=>{
      this.router.navigateByUrl('/danhmuc/indexdm');
      // window.location.reload();
    })
  }
}
