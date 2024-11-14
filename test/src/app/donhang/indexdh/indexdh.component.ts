import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../../headeradmin/admin/admin.component';

@Component({
  selector: 'app-indexdh',
  standalone: true,
  imports: [CommonModule,RouterModule,AdminComponent],
  templateUrl: './indexdh.component.html',
  styleUrl: './indexdh.component.css'
})
export class IndexdhComponent {
  donHangs: any[] = [];

  ngOnInit(): void {
    const donhangs = sessionStorage.getItem("donhangs");
    this.donHangs = donhangs ? JSON.parse(donhangs) : [];
  }

  // Chức năng để xóa một đơn hàng khỏi danh sách
  xoaDonHang(index: number) {
    this.donHangs.splice(index, 1);
    sessionStorage.setItem("donhangs", JSON.stringify(this.donHangs));
  }
}
