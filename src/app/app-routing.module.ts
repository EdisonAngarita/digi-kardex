import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes/pacientes.component';
import { KardexComponent } from './kardex/kardex.component';

const routes: Routes = [  
  { path: '', component: PacientesComponent},
  { path: 'pacientes', component: PacientesComponent},
  { path: 'kardex', component: KardexComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
