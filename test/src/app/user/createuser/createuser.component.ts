import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-createuser',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,FormsModule],
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {
  form!: FormGroup;
  user:User[]=[];
  constructor(public userService: UserService){}
  ngOnInit(): void {
    this.form = new FormGroup({
      fullname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl('')
    });
  }
  get f(){
      return this.form.controls;
    }
    submit(){
      // console.log(this.form.value);
      this.userService.createuser(this.form.value).subscribe((res:any)=>{
        console.log(res);
      })
    }
}
