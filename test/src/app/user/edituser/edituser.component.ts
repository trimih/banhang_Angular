import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent {
  form!: FormGroup;
  id!: string;
  user!: User;

  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['UsId'];
    this.userService.finduser(this.id).subscribe((data: User) => {
      this.user = data;
      this.form.patchValue(this.user); // Cập nhật form với dữ liệu nhận được
    });

    this.form = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),

    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.userService.updateUser(this.id, this.form.value).subscribe((res: any) => {
      // Điều hướng đến một trang tạm thời trước
      this.router.navigateByUrl('/user/temp').then(() => {
        // Sau đó điều hướng về trang danh sách danh mục
        this.router.navigateByUrl('/user/indexuser');
      });
    });
  }
}
