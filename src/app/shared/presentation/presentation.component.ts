import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  @Input() activation: boolean = false;
  section = document.getElementById('start');
  screenReadyToChange: boolean = true;
  validateToOnlyOneRepeat: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}


