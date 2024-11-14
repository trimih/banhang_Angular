import { Component } from '@angular/core';
import { Sanpham } from '../sanpham';
import { SanphamService } from '../sanpham.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../../headeradmin/admin/admin.component';

@Component({
  selector: 'app-viewsp',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,AdminComponent],
  templateUrl: './viewsp.component.html',
  styleUrl: './viewsp.component.css'
})
export class ViewspComponent {
  sanpham:Sanpham[]= [];
  constructor(public sanphamService: SanphamService) {}
  ngOnInit(): void {
      this.sanphamService.getAllSanpham().subscribe((data:Sanpham[]) => {
    this.sanpham = data;
  })
}
deleteSanpham(id: string) {
  
  this.sanphamService.deleteSanpham(id).subscribe(() => {
    this.sanpham = this.sanpham.filter(sanpham => sanpham._id !== id);
    
  });
}
}
