import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  start: boolean = true;
  about: boolean = false;
  projects: boolean = false;
  contact: boolean = false;

  seccion: any;

  constructor() { }

  ngOnInit(): void {
  }

  MoveScreen(screen: string) {
    switch (screen) {
      case 'start':
        this.start = true;
        this.about = false;
        this.projects = false;
        this.contact = false;
        break;
      case 'about':
        this.start = false;
        this.about = true;
        this.projects = false;
        this.contact = false;
        break;
      case 'projects':
        this.start = false;
        this.about = false;
        this.projects = true;
        this.contact = false;
        break;
      case 'contact':
        this.start = false;
        this.about = false;
        this.projects = false;
        this.contact = true;
        break;
      default:
        break;
    }
    this.seccion = document.getElementById(screen);
    this.seccion.scrollIntoView({ block: "end", behavior: "smooth" });
  }

}
