import { Component } from '@angular/core';
import { Danhmuc } from '../danhmuc';
import { DanhmucService } from '../danhmuc.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../../headeradmin/admin/admin.component';

@Component({
  selector: 'app-indexdm',
  standalone: true,
  imports: [CommonModule,RouterModule,AdminComponent],
  templateUrl: './indexdm.component.html',
  styleUrl: './indexdm.component.css'
})
export class IndexdmComponent {
    danhmuc:Danhmuc[]= [];
    constructor(public danhmucService: DanhmucService) {}
    ngOnInit(): void {
        this.danhmucService.getAllDanhmuc().subscribe((data:Danhmuc[]) => {
      this.danhmuc = data;
    })
}
  deleteDanhmuc(id: string) {
    
    this.danhmucService.deleteDanhmuc(id).subscribe(() => {
      this.danhmuc = this.danhmuc.filter(danhmuc => danhmuc._id !== id);
      
    });
  }


}


