import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PrimaryProjectComponent } from './primary-project/primary-project.component';



@NgModule({
  declarations: [
    ProyectosComponent,
    PrimaryProjectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
