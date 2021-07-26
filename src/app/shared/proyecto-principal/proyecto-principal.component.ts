import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-principal',
  templateUrl: './proyecto-principal.component.html',
  styleUrls: ['./proyecto-principal.component.css']
})
export class ProyectoPrincipalComponent implements OnInit {

  imageBanner: boolean = true;
  imageLogin: boolean = false;
  imagePrincipal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //Funcion para cambiar de imagen del proyecto principal
  SiguienteImagen() {
    if (this.imageBanner === true) {
      this.imageBanner = false;
      this.imageLogin = true;
    } else if (this.imageLogin === true) {
      this.imageLogin = false;
      this.imagePrincipal = true;
    } else if (this.imagePrincipal === true) {
      this.imagePrincipal = false;
      this.imageBanner = true;
    }
  }
  AnteriorImagen() {
    if (this.imageBanner === true) {
      this.imageBanner = false;
      this.imagePrincipal = true;
    } else if (this.imageLogin === true) {
      this.imageLogin = false;
      this.imageBanner = true;
    } else if (this.imagePrincipal === true) {
      this.imagePrincipal = false;
      this.imageLogin = true;
    }
  }


}
