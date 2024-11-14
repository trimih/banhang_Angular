import { Routes } from '@angular/router';
import { IndexdmComponent } from './danhmuc/indexdm/indexdm.component';
import { CreatedmComponent } from './danhmuc/createdm/createdm.component';
import { EditdmComponent } from './danhmuc/editdm/editdm.component';
import { ViewdmComponent } from './danhmuc/viewdm/viewdm.component';
import { IndexspComponent } from './sanpham/indexsp/indexsp.component';
import { CreatespComponent } from './sanpham/createsp/createsp.component';
import { EditspComponent } from './sanpham/editsp/editsp.component';
import { ViewspComponent } from './sanpham/viewsp/viewsp.component';
import { IndexuserComponent } from './user/indexuser/indexuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { IndexghComponent } from './giohang/indexgh/indexgh.component';
import { SanphamByDanhmucComponent } from './sanpham/sanphamdm/sanphamdm.component';
import { LoginuserComponent } from './user/loginuser/loginuser.component';
import { AdminuserComponent } from './user/adminuser/adminuser.component';
import { IndexdhComponent } from './donhang/indexdh/indexdh.component';
import { ChitietdhComponent } from './donhang/chitietdh/chitietdh.component';
import { ChitietspComponent } from './sanpham/chitietsp/chitietsp.component';

export const routes: Routes = [
    {path: "",redirectTo: 'sanpham/indexsp',pathMatch: 'full'},
    {path: 'danhmuc/indexdm',component: IndexdmComponent,},
    {path: 'danhmuc/createdm',component: CreatedmComponent,},
    {path: 'danhmuc/editdm',component: EditdmComponent,},
    {path: 'danhmuc/viewdm',component: ViewdmComponent,},
    {path: 'danhmuc/:DmId/edit',component: EditdmComponent,},

    {path: 'sanpham/indexsp',component: IndexspComponent,}, 
    {path: 'sanpham/createsp',component: CreatespComponent,},
    {path: 'sanpham/editsp',component: EditspComponent,},
    {path: 'sanpham/viewsp',component: ViewspComponent,},
    {path: 'sanpham/:SpId/edit',component: EditspComponent,},
    {path: 'sanpham/:SpId/index',component: SanphamByDanhmucComponent,},
    {path: 'sanpham/:SpId/chitiet',component: ChitietspComponent,},

    {path: 'user/indexuser',component: IndexuserComponent,}, 
    {path: 'user/createuser',component: CreateuserComponent,},
    {path: 'user/edituser',component: EdituserComponent,},
    {path: 'user/userlogin',component: LoginuserComponent,},
    {path: 'user/adminuser',component: AdminuserComponent,},
    {path: 'user/:UsId/edit',component: EdituserComponent,},

    {path: 'giohang/:SpId/index',component: IndexghComponent,},
    {path: 'giohang/indexgh',component: IndexghComponent,}, 

    {path:'donhang/indexdh', component: IndexdhComponent,},
    {path:'donhang/:DhId/index', component: ChitietdhComponent,}
];
