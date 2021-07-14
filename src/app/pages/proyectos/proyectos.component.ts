import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {
    this.projectsService.GetProjects().subscribe((resp) => {
      this.proyectos = resp;
    });
  }

  btnExit: any;
  btnBehind: any;
  btnNext: any;
  imagenes: any;
  imagenActiva: any;
  primaryContainer: any;
  imageIndex: number = 0;
  currentImage: any;
  proyectos: any = []

  ngOnInit(): void {
    this.primaryContainer = document.querySelector('#primary-container');
    this.btnExit = document.querySelector('#btn-exit');
    this.btnBehind = document.querySelector('#btn-behind');
    this.btnNext = document.querySelector('#btn-next');
    this.imagenes = document.querySelectorAll('#galeria img');
    this.imagenActiva = document.querySelector('#active-image');
  }

  openLightbox(image: string) {
    this.imagenActiva = document.querySelector('#active-image');
    this.primaryContainer = document.querySelector('#primary-container');
    this.btnExit = document.querySelector('#btn-exit');
    this.btnBehind = document.querySelector('#btn-behind');
    this.btnNext = document.querySelector('#btn-next');
    this.imagenes = document.querySelectorAll('#galeria img');
    this.currentImage = document.getElementById(image) as HTMLImageElement;
    this.imagenActiva.src = image;
    this.primaryContainer.style.display = 'flex';
    this.imageIndex = Array.from(this.imagenes).indexOf(this.currentImage);
  }

  /*Cerrar el lightbox*/

  exitLightBox() {
    this.primaryContainer.style.display = 'none';
  }

  /*Siguiente Imagen en el lightbox*/
  NextImage(index: number, nombre: any) {
    console.log(nombre);

    this.imagenes = document.querySelectorAll('#galeria img');
    //console.log(this.imagenes[this.imageIndex + 1]);
    if (this.imageIndex === (3 + ((index + 1) * 4))) {
      this.imageIndex = -1 + ((index + 1) * 4);
    }
    this.imagenActiva.src = this.imagenes[this.imageIndex + 1].src;
    this.imageIndex++;
  }

  /*Anterior imagen en el lightbox*/
  PreviousImage() { }

}
