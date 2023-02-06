import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { StartWidgetComponent } from './start-widget/start-widget.component';
import { ListEnseignantComponent } from './list-enseignant/list-enseignant.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    CoreComponent,

    StartWidgetComponent,
    ListEnseignantComponent,
    ListCourseComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,


  ],
  exports: [CoreComponent,

    StartWidgetComponent,
    ListEnseignantComponent,
    ListCourseComponent,
    HomeComponent]
})
export class CoreModule { }
