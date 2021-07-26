import { Component, HostListener, OnInit } from '@angular/core';
import { CertificatesService } from '../../services/certificates.service';
import { Certificate } from '../../models/certificate.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //Variables utilizadas para perfil y movilidad de la pagina
  imageSecundaria: boolean = true;
  imageUniversitaria: boolean = false;
  animado: any;
  scrollTop: any;
  altura: any;
  screnSize: number = screen.height;
  divLevel2: any;

  //Variables utilizadas para lightbox de educacion
  btnExit: any;
  images: any;
  lightbox: any;
  activeImage: any;
  indexImage: number = 0;

  //Variables utilizadas para certificaciones
  sourceCertificate: string = '';
  certificates: Certificate[] = [];
  Certificate: Certificate[] = [];
  tecnologySelected: string = 'Angular';
  indexCertificate: number = 0;
  load: boolean = false;
  activeCertificate: any;
  certificateLightbox: any;
  certificateLightboxXl: any;
  activeCertificateXl: any;


  //Funciones de siguiente y anterior para las certificaciones
  SiguienteImagen() {
    if (this.indexCertificate == this.certificates.length - 1) {
      this.indexCertificate = 0;
      document.getElementById("certificate")?.classList.add('animate-enter-card');
    } else {
      this.indexCertificate++;
      document.getElementById("certificate")?.classList.add('animate-enter-card');
    }
    setTimeout(() => {
      document.getElementById("certificate")?.classList.remove('animate-enter-card');
    }, 850);
  }
  AnteriorImagen() {
    if (this.indexCertificate == this.certificates.length - 1) {
      this.indexCertificate = 0;
      document.getElementById("certificate")?.classList.add('animate-enter-card');
    } else {
      this.indexCertificate--;
      document.getElementById("certificate")?.classList.add('animate-enter-card');
    }
    setTimeout(() => {
      document.getElementById("certificate")?.classList.remove('animate-enter-card');
    }, 850);

  }

  //Apertura de imagen seleccionada
  openLightBox(img: string) {
    this.lightbox.style.display = 'flex';
    this.activeImage.src = img;
  }

  //Apertura de imagen certificado
  openCertificate(img: string) {
    this.certificateLightbox.style.display = 'flex';
    this.activeCertificate.src = img;
  }

  //Apertura de imagen certificado
  openCertificateXl(img: string) {
    this.certificateLightboxXl.style.display = 'flex';
    this.activeCertificateXl.src = img;
  }

  //Salida del lightbox
  exit() {
    this.lightbox.style.display = 'none';
  }

  //Salida del certificado
  exitCertificate() {
    this.certificateLightbox.style.display = 'none';
  }
  //Salida del certificado
  exitCertificateXl() {
    this.certificateLightboxXl.style.display = 'none';
  }

  constructor(private certificatesService: CertificatesService) {
    this.FilterCertificates('Angular');
  }

  //Activa el filtro de las tecnologias a mostrar
  FilterCertificates(tecnology: string) {
    this.load = false;
    this.certificates = [];
    this.indexCertificate = 0;
    this.tecnologySelected = tecnology;
    this.certificatesService.getCertificates().subscribe(Certificate => {
      Certificate.forEach(element => {
        if (element?.tecnologia == this.tecnologySelected) {
          this.certificates.push(element);
        }
        this.load = true;
      });
      document.getElementById("certificate")?.classList.add('animate-enter-card');
      setTimeout(() => {
        document.getElementById("certificate")?.classList.remove('animate-enter-card');
      }, 850);
    })
  }

  ngOnInit(): void {
    //Se cargan los componentes necesarios
    this.animado = document.querySelectorAll(".anim");
    this.btnExit = document.querySelector('#btn-exit');
    this.images = document.querySelectorAll('#galery img');
    this.lightbox = document.querySelector('#primary-container');
    this.certificateLightbox = document.querySelector('#primary-container-certificate');
    this.certificateLightboxXl = document.querySelector('#primary-container-xl');
    this.activeImage = document.querySelector('#active-image');
    this.activeCertificate = document.querySelector('#active-certificate');
    this.activeCertificateXl = document.querySelector('#active-certificate-xl');
  }

  //Funcion para activar las barras de competencias en cuanto sean visibles en la pagina

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

  //Funcion de la seccion de navegacion para moverse en la pagina

  GoToDiv(page: string) {
    switch (page) {
      case 'front':
        document.getElementById("perfil")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'back':
        document.getElementById("educacion")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'fact':
        document.getElementById("certificaciones")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      case 'demo':
        document.getElementById("experiencia")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        break;
      default:
        break;
    }
  }

  //Funciones para mover estados de educacion entre secundaria-superior-extras aqui se agregan y se quitan las funciones para el posicionamiento y animaciones de entrada

  LevelOne() {
    document.getElementById('secondary-education')?.classList.add('animate-enter-card');
    document.getElementById('secondary-education')?.classList.add('flex');
    document.getElementById('secondary-education')?.classList.remove('hidden');
    document.getElementById('extra')?.classList.remove('animate-enter-card');
    document.getElementById('extra')?.classList.remove('flex');
    document.getElementById('extra')?.classList.add('hidden');
    document.getElementById('university')?.classList.remove('animate-enter-card');
    document.getElementById('university')?.classList.remove('flex');
    document.getElementById('university')?.classList.add('hidden');
    document.getElementById('activeLevel')?.classList.remove('left-2/5');
    document.getElementById('activeLevel')?.classList.remove('md:left-1/2');
    document.getElementById('activeLevel')?.classList.remove('right-0');
    document.getElementById('activeLevel')?.classList.add('left-0');
    document.getElementById('activeLevel')?.classList.add('animate-enter-card');
    setTimeout(() => {
      document.getElementById('activeLevel')?.classList.remove('animate-enter-card');
    }, 500);
  }

  //Se desactivan las funciones anteriores para que no causen problemas y luego se ingresan las funciones de entrada y posicionamiento
  LevelTwo() {
    document.getElementById('university')?.classList.add('animate-enter-card');
    document.getElementById('university')?.classList.add('flex');
    document.getElementById('university')?.classList.remove('hidden');
    document.getElementById('secondary-education')?.classList.remove('animate-enter-card');
    document.getElementById('secondary-education')?.classList.remove('flex');
    document.getElementById('secondary-education')?.classList.add('hidden');
    document.getElementById('extra')?.classList.remove('animate-enter-card');
    document.getElementById('extra')?.classList.remove('flex');
    document.getElementById('extra')?.classList.add('hidden');
    document.getElementById('activeLevel')?.classList.remove('left-0');
    document.getElementById('activeLevel')?.classList.remove('right-0');
    document.getElementById('activeLevel')?.classList.add('left-2/5');
    document.getElementById('activeLevel')?.classList.add('md:left-1/2');
    document.getElementById('activeLevel')?.classList.add('animate-enter-card');
    setTimeout(() => {
      document.getElementById('activeLevel')?.classList.remove('animate-enter-card');
    }, 500);
  }
  LevelThree() {
    document.getElementById('extra')?.classList.add('animate-enter-card');
    document.getElementById('extra')?.classList.add('flex');
    document.getElementById('extra')?.classList.remove('hidden');
    document.getElementById('secondary-education')?.classList.remove('animate-enter-card');
    document.getElementById('secondary-education')?.classList.remove('flex');
    document.getElementById('secondary-education')?.classList.add('hidden');
    document.getElementById('university')?.classList.remove('animate-enter-card');
    document.getElementById('university')?.classList.remove('flex');
    document.getElementById('university')?.classList.add('hidden');
    document.getElementById('activeLevel')?.classList.remove('left-0');
    document.getElementById('activeLevel')?.classList.remove('left-2/5');
    document.getElementById('activeLevel')?.classList.remove('md:left-1/2');
    document.getElementById('activeLevel')?.classList.add('right-0');
    document.getElementById('activeLevel')?.classList.add('animate-enter-card');
    setTimeout(() => {
      document.getElementById('activeLevel')?.classList.remove('animate-enter-card');
    }, 500);
  }


}
