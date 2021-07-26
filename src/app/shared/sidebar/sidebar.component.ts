import { Component, HostListener, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  start: any = 'true';
  @Input()
  about: any = 'false';
  @Input()
  projects: any = 'false';
  @Input()
  contact: any = 'false';
  seccion: any;
  @Input()
  page: string = '';
  screenSize: number = 0;

  @Output() pageSent = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.MoveScreen('start');
  }

  //Funcion que mueve la pantall
  MoveScreen(screen: string) {
    switch (screen) {
      case 'start':
        this.page = 'start';
        this.pageSent.emit('start');
        break;
      case 'about':
        this.page = 'about';
        this.pageSent.emit('about');
        break;
      case 'projects':
        this.page = 'projects';
        this.pageSent.emit('projects');
        break;
      case 'contact':
        this.page = 'contact';
        this.pageSent.emit('contact');
        break;
      default:
        break;
    }
    this.seccion = document.getElementById(screen);
    if (screen == 'start') {
      this.screenSize = 0;
    } else if (screen == 'about') {
      this.screenSize = this.seccion.getBoundingClientRect().height;
    } else if (screen == 'projects') {
      this.screenSize = this.seccion.getBoundingClientRect().height * 2;
    } else if (screen == 'contact') {
      this.screenSize = this.seccion.getBoundingClientRect().height * 3;
    }
    window.scrollTo({ left: 0, top: this.screenSize, behavior: 'smooth' });
  }

  //Funcion para almacenar pagina activa en localstorage y en las variables
  CheckControlPages() {
    if (this.page == 'start') {
      this.start = 'true';
      this.about = 'false';
      this.projects = 'false';
      this.contact = 'false';
    } else if (this.page == 'about') {
      this.start = 'false';
      this.about = 'true';
      this.projects = 'false';
      this.contact = 'false';
    } else if (this.page == 'projects') {
      this.start = 'false';
      this.about = 'false';
      this.projects = 'true';
      this.contact = 'false';
    } else if (this.page == 'contact') {
      this.start = 'false';
      this.about = 'false';
      this.projects = 'false';
      this.contact = 'true';
    }
  }
}
