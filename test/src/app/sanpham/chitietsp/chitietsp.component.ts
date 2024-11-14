import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';
import { Sanpham } from '../sanpham';
import { SanphamService } from '../sanpham.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-chitietsp',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterModule],
  templateUrl: './chitietsp.component.html',
  styleUrl: './chitietsp.component.css'
})
export class ChitietspComponent {
  sanpham!:  Sanpham;
  id!:string;
  
  constructor(public sanphamService: SanphamService,private rote: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.rote.snapshot.params['SpId'];
    if (this.id) {
      this.getSanphamById(this.id);
    }
  }

  getSanphamById(id: string): void {
    this.sanphamService.getSanphamById(id).subscribe((data: Sanpham) => {
      this.sanpham = data;
    }, error => {
      console.error('Error fetching product details:', error);
      // Xử lý lỗi nếu cần
    });
  }
} 
