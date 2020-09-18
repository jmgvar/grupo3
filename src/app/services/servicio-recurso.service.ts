import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Recurso } from '../model/recurso';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioRecursoService {

  constructor(private http: HttpClient) {}

  

  getRecurso(id: string) {
    return this.http.get(environment.reqresApi+'unknown/'+id);
  }

  getAll(): Observable<any>{
    return this.http.get(environment.reqresApi+'unknown');
  }
  
}
