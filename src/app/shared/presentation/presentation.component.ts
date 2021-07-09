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
    window.onscroll = () => {
      var section: any = document.getElementById('start');
      var y = window.scrollY;
      if (y > 0 && this.screenReadyToChange === true && this.validateToOnlyOneRepeat === true) {
        /* document.getElementById("astro")?.classList.add('animate-back-to-right');
        document.getElementById("data")?.classList.add('animate-back-to-left');
        document.getElementById("astro")?.classList.remove('animate-rigth-to-left');
        document.getElementById("data")?.classList.remove('animate-left-to-right'); */
        this.validateToOnlyOneRepeat = false;
      } else if (y < section.getBoundingClientRect().height && this.screenReadyToChange === false && this.validateToOnlyOneRepeat === true) {
        /* document.getElementById("astro")?.classList.remove('animate-back-to-right');
        document.getElementById("data")?.classList.remove('animate-back-to-left');
        document.getElementById("astro")?.classList.add('animate-rigth-to-left');
        document.getElementById("data")?.classList.add('animate-left-to-right'); */
        this.validateToOnlyOneRepeat = false;
      }
      if (y >= section.getBoundingClientRect().height) {
        this.screenReadyToChange = false;
        this.validateToOnlyOneRepeat = true;
      }
      if (y === 0) {
        this.screenReadyToChange = true;
        this.validateToOnlyOneRepeat = true;
      }
    };
  }



  ngOnInit(): void {
  }
  mostrarAnimaciones() {
    return document.getElementById("astro")?.classList.add('animate-back-to-right');;
  }

}


