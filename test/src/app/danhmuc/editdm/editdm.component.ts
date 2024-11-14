import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Danhmuc } from '../danhmuc';
import { DanhmucService } from '../danhmuc.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editdm',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './editdm.component.html',
  styleUrls: ['./editdm.component.css'] // Đổi 'styleUrl' thành 'styleUrls'
})
export class EditdmComponent implements OnInit {
  form!: FormGroup;
  id!: string;
  danhmuc!: Danhmuc;

  constructor(
    public danhmucService: DanhmucService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['DmId'];
    this.danhmucService.findDanhmuc(this.id).subscribe((data: Danhmuc) => {
      this.danhmuc = data;
      this.form.patchValue(this.danhmuc); // Cập nhật form với dữ liệu nhận được
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.danhmucService.updateDanhmuc(this.id, this.form.value).subscribe((res: any) => {
      // Điều hướng đến một trang tạm thời trước
      this.router.navigateByUrl('/danhmuc/temp').then(() => {
        // Sau đó điều hướng về trang danh sách danh mục
        this.router.navigateByUrl('/danhmuc/indexdm');
      });
    });
  }
}
