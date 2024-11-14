import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
})
export class LoginuserComponent {
  form!: FormGroup;
  user:User[]= [];
  constructor(public userService: UserService, private router: Router,) {}
  ngOnInit(): void {
  this.form = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });
}
get f(){
  return this.form.controls;
}
submit(){
  // console.log(this.form.value);
    this.userService.loginUser(this.form.value).subscribe((user: User) => {
      console.log(user);
      if(user){
        if(user.role === "admin"){
        console.log('trang admin',);
        this.router.navigateByUrl('/user/adminuser');
      }else if(user.role==="user"){
        console.log('trang User');
        this.router.navigateByUrl('/sanpham/indexsp');
      }else{
        console.log('rỗng');
      }
      }else{
        console.log('email hoặc password không đúng');
      }
      
     
    });
}

}
