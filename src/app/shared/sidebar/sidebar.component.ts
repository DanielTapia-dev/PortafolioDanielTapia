import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() start: boolean = true;
  @Input() about: boolean = false;
  @Input() projects: boolean = false;
  @Input() contact: boolean = false;

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

  @HostListener('mousewheel', ['$event']) onMousewheel(event: any) {
    console.log(event.deltaY);
  }

}
