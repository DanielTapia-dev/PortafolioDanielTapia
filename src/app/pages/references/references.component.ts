import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  referencias: any[] = [
    {
      nombre: 'Diego Yanez',
      celular: '0961103112',
      proyecto: 'Laboratorios RedLab y Marketzone.',
      correo: 'diegoyanez13@hotmail.com'
    }, {
      nombre: 'María José Fonseca Córdova',
      celular: '0987204949',
      proyecto: 'Vicerrectorado académico UTA.',
      correo: 'mjfonseca@uta.edu.ec'
    }, {
      nombre: 'Alex Aldana',
      celular: '0996183434',
      proyecto: 'Kengisoft - Sistema de citas medicas Patronato Municipal de Latacunga.',
      correo: 'alguial@gmail.com'
    }];

}
