import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitietdh',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './chitietdh.component.html',
  styleUrl: './chitietdh.component.css'
})
export class ChitietdhComponent {
  donHang: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Lấy id của đơn hàng từ URL
    const id = this.route.snapshot.params['DhId'];
    // Lấy danh sách đơn hàng từ session storage
    const donhangs = sessionStorage.getItem("donhangs");
    const danhSachDonHang = donhangs ? JSON.parse(donhangs) : [];

    // Tìm đơn hàng theo id
    this.donHang = danhSachDonHang.find((dh: any) => dh.id === id);
  }
}
