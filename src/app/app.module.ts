import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContactComponent } from './shared/contact/contact.component';
import { ProyectoPrincipalComponent } from './shared/proyecto-principal/proyecto-principal.component';
import { AboutMeComponent } from './shared/about-me/about-me.component';
import { PresentationComponent } from './shared/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    ProyectoPrincipalComponent,
    AboutMeComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
