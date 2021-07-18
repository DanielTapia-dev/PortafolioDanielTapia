import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imageBanner: boolean = true;
  imageLogin: boolean = false;

  SiguienteImagen() {
    if (this.imageBanner === true) {
      this.imageBanner = false;
      this.imageLogin = true;
    } else if (this.imageLogin === true) {
      this.imageLogin = false;
      this.imageBanner = true;
    }
  }
  AnteriorImagen() {
    if (this.imageBanner === true) {
      this.imageBanner = false;
      this.imageLogin = true;
    } else if (this.imageLogin === true) {
      this.imageLogin = false;
      this.imageBanner = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  GoToDiv(page: string) {
    switch (page) {
      case 'front':
        document.getElementById("front")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'back':
        document.getElementById("back")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'fact':
        document.getElementById("fact")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'demo':
        document.getElementById("demo")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      default:
        break;
    }
  }

}
