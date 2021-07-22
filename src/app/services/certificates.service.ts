import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificate } from '../models/certificate.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private http: HttpClient) { }

  private url = 'https://portafolio-ac7b8-default-rtdb.firebaseio.com/certificados.json';


  getCertificates() {
    return this.http.get<Certificate[]>(this.url);
  }

}
