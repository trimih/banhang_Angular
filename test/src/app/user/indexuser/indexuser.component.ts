import { Component } from '@angular/core';
import { User } from '../user';
import { SanphamService } from '../../sanpham/sanpham.service';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../../headeradmin/admin/admin.component';

@Component({
  selector: 'app-indexuser',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule,AdminComponent],
  templateUrl: './indexuser.component.html',
  styleUrl: './indexuser.component.css'
})
export class IndexuserComponent {
  form!: FormGroup;
  user:User[]= [];
  constructor(public userService: UserService) {}
  ngOnInit(): void {
      this.userService.getAlluser().subscribe((data:User[]) => {
    this.user = data;
  })
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
  this.userService.loginUser(this.form.value).subscribe((user:User)=>{
    console.log(user);
  })
}

deleteUser(id: string) {
  
  this.userService.deleteUser(id).subscribe(() => {
    this.user = this.user.filter(user => user._id !== id);
    
  });
}

}
