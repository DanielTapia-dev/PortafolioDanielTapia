import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  seccion: any;

  constructor() { }

  ngOnInit(): void {
  }

  MoveScreen(screen: string) {
    this.seccion = document.getElementById(screen);
    this.seccion.scrollIntoView({ block: "end", behavior: "smooth" });
  }

}
