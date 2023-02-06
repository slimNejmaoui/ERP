import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from '../core/core.module';
import { RegistreEleveComponent } from './registre-eleve/registre-eleve.component';
import { RegistreEnseignantComponent } from './registre-enseignant/registre-enseignant.component';
import { RegistreStafComponent } from './registre-staf/registre-staf.component';
import { SharedModule } from '../shared/shared.module';
import { RegistreParentComponent } from './registre-parent/registre-parent.component';
import { AppModule } from '../app.module';




@NgModule({
  declarations: [
    AdminComponent,
    RegistreEleveComponent,
    RegistreEnseignantComponent,
    RegistreStafComponent,
    RegistreParentComponent,



  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    SharedModule,
  ],
  exports: [AdminComponent,
    RegistreEleveComponent,
    RegistreEnseignantComponent,
    RegistreStafComponent,
    RegistreParentComponent,]
})
export class AdminModule { }
