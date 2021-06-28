import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  @HostListener('mousewheel', ['$event']) onMousewheel(event: any) {
    console.log(event.deltaY);
  }
}
