import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistreEleveComponent } from './registre-eleve/registre-eleve.component';
import { RegistreEnseignantComponent } from './registre-enseignant/registre-enseignant.component';
import { RegistreParentComponent } from './registre-parent/registre-parent.component';
import { RegistreStafComponent } from './registre-staf/registre-staf.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [

      {
        path: 'registreEleve',
        component: RegistreEleveComponent
      },
      {
        path: 'registreEnseignant',
        component: RegistreEnseignantComponent
      },
      {
        path: 'registreStaf',
        component: RegistreStafComponent
      },
      {
        path: 'registreParent',
        component: RegistreParentComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
