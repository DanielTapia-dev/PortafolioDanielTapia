import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PrimaryProjectComponent } from './primary-project/primary-project.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    ProyectosComponent,
    PrimaryProjectComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProyectosComponent,
    PrimaryProjectComponent,
    PagesComponent
  ]
})
export class PagesModule { }
