import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesService } from './pacientes/services/pacientes.service';
import { SideNavBarComponent } from './home/side-nav-bar/side-nav-bar.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './home/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { KardexComponent } from './kardex/kardex.component';
import { AgregarPacienteComponent } from './pacientes/agregar-paciente/agregar-paciente.component';
@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    SideNavBarComponent,
    InicioComponent,
    KardexComponent,
    AgregarPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [PacientesService],
  bootstrap: [AppComponent]  
})
export class AppModule { }
