import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  imageBanner: boolean = true;
  imageLogin: boolean = false;
  animado: any;
  scrollTop: any;
  altura: any;
  screnSize: number = screen.height;

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

  constructor() {
    //this.imagenes = document.querySelectorAll('#galeria img');

  }

  ngOnInit(): void {
    this.animado = document.querySelectorAll(".anim");
  }

  onScroll(event: any) {
    this.screnSize = screen.height;
    this.scrollTop = document.getElementById('about')?.scrollTop;
    for (let i = 0; i < this.animado.length; i++) {
      this.altura = this.animado[i].offsetTop;
      if (this.altura - (this.screnSize - 10) < this.scrollTop) {
        this.animado[i].classList.add('animate-left-to-right-competences');
        this.animado[i].classList.remove('invisible');
        this.animado[i].classList.add('visible');
      }
    }
  };

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




  @HostListener('click') clicking() {
    this.scrollTop = document.documentElement.scrollTop;
    console.log(this.scrollTop);
  }

}
