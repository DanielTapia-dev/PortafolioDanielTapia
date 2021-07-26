import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  certificateLightboxXl: any;
  activeCertificateXl: any;

  constructor() { }

  ngOnInit(): void {
    this.certificateLightboxXl = document.querySelector('#primary-container-xl');
    this.activeCertificateXl = document.querySelector('#active-certificate-xl');
  }

  //Apertura de imagen certificado
  openCertificateXl(img: string) {
    this.certificateLightboxXl.style.display = 'flex';
    this.activeCertificateXl.src = img;
  }

  //Salida del certificado
  exitCertificateXl() {
    this.certificateLightboxXl.style.display = 'none';
  }
}
