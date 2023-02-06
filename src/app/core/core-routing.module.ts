import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: CoreComponent, children: [

      { path: 'home', component: HomeComponent },

      { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }

    ]
  },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
