import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProyectoPrincipalComponent } from './proyecto-principal/proyecto-principal.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    PresentationComponent,
    ContactComponent,
    ProyectoPrincipalComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeComponent,
    PresentationComponent,
    ContactComponent,
    ProyectoPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
