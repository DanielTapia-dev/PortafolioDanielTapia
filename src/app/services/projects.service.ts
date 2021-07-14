import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  private url = 'https://portafolio-ac7b8-default-rtdb.firebaseio.com/proyectos.json';

  GetProjects() {
    return this.http.get(this.url);
  }
}
