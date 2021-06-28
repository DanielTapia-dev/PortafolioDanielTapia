import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  start: any = 'true';
  about: any = 'false';
  projects: any = 'false';
  contact: any = 'false';
  seccion: any;
  page: string = '';

  constructor() {
    if (!localStorage.getItem('page')) {
      this.CheckControlPages();
      window.location.href = ('/');
    } else {
      this.CheckControlPages();
    }
  }


  ngOnInit(): void {
  }

  //Funcion que mueve la pantall
  MoveScreen(screen: string) {
    switch (screen) {
      case 'start':
        localStorage.setItem('page', 'start');
        this.CheckControlPages();
        break;
      case 'about':
        localStorage.setItem('page', 'about');
        this.CheckControlPages();
        break;
      case 'projects':
        localStorage.setItem('page', 'projects');
        this.CheckControlPages();
        break;
      case 'contact':
        localStorage.setItem('page', 'contact');
        this.CheckControlPages();
        break;
      default:
        break;
    }
    console.log(screen);
    this.seccion = document.getElementById(screen);
    console.log(this.seccion.getBoundingClientRect().height);
    window.scrollTo({ left: 0, top: this.seccion.getBoundingClientRect().height, behavior: 'smooth' });
  }

  //Funcion para almacenar pagina activa en localstorage y en las variables
  CheckControlPages() {
    if (!localStorage.getItem('page')) {
      localStorage.setItem('page', 'start');
    } else {
      if (localStorage.getItem('page') == 'start') {
        this.start = 'true';
        this.about = 'false';
        this.projects = 'false';
        this.contact = 'false';
      } else if (localStorage.getItem('page') == 'about') {
        this.start = 'false';
        this.about = 'true';
        this.projects = 'false';
        this.contact = 'false';
      } else if (localStorage.getItem('page') == 'projects') {
        this.start = 'false';
        this.about = 'false';
        this.projects = 'true';
        this.contact = 'false';
      } else {
        this.start = 'false';
        this.about = 'false';
        this.projects = 'false';
        this.contact = 'true';
      }
    }
  }

  //Funcion para activar cambio de pantall al mover el scroll
  @HostListener('wheel', ['$event']) onMousewheel(event: any) {
    if (localStorage.getItem('page') == 'start') {
      if (event.deltaY > '0') {
        this.page = 'about';
        this.MoveScreen(this.page);
        localStorage.setItem('page', 'about');
        this.CheckControlPages();
      }
    } else if (localStorage.getItem('page') == 'about') {
      if (event.deltaY > '0') {
        this.page = 'projects';
        this.MoveScreen(this.page);
        localStorage.setItem('page', 'projects');
        this.CheckControlPages();
      } else {
        this.page = 'start';
        this.MoveScreen(this.page);
        localStorage.setItem('page', 'start');
        this.CheckControlPages();
      }
    } else if (localStorage.getItem('page') == 'projects') {
      if (event.deltaY > '0') {
        this.page = 'contact';
        this.MoveScreen(this.page);
        localStorage.setItem('page', 'contact');
        this.CheckControlPages();
      } else {
        this.page = 'about';
        this.MoveScreen(this.page);
        localStorage.setItem('page', 'about');
        this.CheckControlPages();
      }
    } else if (localStorage.getItem('page') == 'contact') {
      if (event.deltaY < '0') {
        this.page = 'projects';
        this.MoveScreen(this.page);
        localStorage.setItem('page', 'projects');
        this.CheckControlPages();
      }
    }
  }

}
