import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';


import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthlayoutComponent } from './layout/authlayout/authlayout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TestLoginComponent } from './test-login/test-login.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthlayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TestLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    AdminModule,
    DashboardModule






  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
