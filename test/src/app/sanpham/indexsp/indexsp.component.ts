import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sanpham } from '../sanpham';
import { SanphamService } from '../sanpham.service';
import { HeaderComponent } from '../../header/header.component';
import { Danhmuc } from '../../danhmuc/danhmuc';

@Component({
  selector: 'app-indexsp',
  standalone: true,
  imports: [CommonModule,RouterModule,HeaderComponent,],
  templateUrl: './indexsp.component.html',
  styleUrl: './indexsp.component.css'
})
export class IndexspComponent {
  sanpham:Sanpham[]= [];
  danhmuc:Danhmuc[] = [];
  constructor(public sanphamService: SanphamService) {}
  ngOnInit(): void {
      this.sanphamService.getAllSanpham().subscribe((data:Sanpham[]) => {
    this.sanpham = data;
  })
  this.sanphamService.getAllDanhmuc().subscribe((data:Danhmuc[]) => {
    this.danhmuc = data;
  })
}
deleteSanpham(id: string) {
  
  this.sanphamService.deleteSanpham(id).subscribe(() => {
    this.sanpham = this.sanpham.filter(sanpham => sanpham._id !== id);
    
  });
}
// lấy sanpham theo danhmuc
getSanphamByDanhmuc(id: string) {
  this.sanphamService.getSanphamByDanhmuc(id).subscribe((data: Sanpham[]) => {
    this.sanpham = data;
  });
}
}
