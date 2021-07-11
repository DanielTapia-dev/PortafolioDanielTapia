import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
<<<<<<< HEAD
import { AboutMeComponent } from './shared/about-me/about-me.component';
=======
import { PresentationComponent } from './shared/presentation/presentation.component';
>>>>>>> presentation

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    FooterComponent,
    SidebarComponent,
<<<<<<< HEAD
    AboutMeComponent
=======
    PresentationComponent
>>>>>>> presentation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
