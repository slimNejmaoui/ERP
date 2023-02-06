import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';
import { TestLoginComponent } from './test-login/test-login.component';



const routes: Routes = [


  {
    path: '', component: AdminComponent, children: [{
      path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },

    { path: '', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },


    ]
  },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },






];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
