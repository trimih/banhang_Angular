import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { AdminComponent } from '../../headeradmin/admin/admin.component';

@Component({
  selector: 'app-adminuser',
  standalone: true,
  imports: [CommonModule,RouterModule ,AdminComponent],
  templateUrl: './adminuser.component.html',
  styleUrl: './adminuser.component.css'
})
export class AdminuserComponent {

}
