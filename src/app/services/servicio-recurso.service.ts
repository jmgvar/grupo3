import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Recurso } from '../model/recurso';


@Injectable({
  providedIn: 'root'
})
export class ServicioRecursoService {

  constructor(private http: HttpClient) {}


  get(id: String){
    this.http.get(environment.reqresApi+'unknown/'+id);
  }

  getAll(){
    this.http.get(environment.reqresApi+'unknown');
  }
}
