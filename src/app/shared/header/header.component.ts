import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu: any;
  menuIsOpen: boolean = false;

  seccion: any;

  constructor() { }

  ngOnInit(): void {
    this.menu = document.getElementById('menu');
  }

  scrollToElement(element: any) {
    this.seccion = document.getElementById(element);
    this.seccion.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  openMenu() {
    if (this.menuIsOpen === true) {
      this.menu.classList.remove('animate-left-to-right');
      this.menu.classList.add('animate-back-to-left');
      setTimeout(() => {
        this.menu.style.display = 'none';
      }, 500);
      this.menuIsOpen = false;
    } else {
      this.menu.classList.add('animate-left-to-right');
      this.menu.classList.remove('animate-back-to-left');
      this.menu.style.display = 'flex';
      this.menuIsOpen = true;
    }
  }

}
