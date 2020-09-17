import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import {environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioRegistroService {

  constructor(private http: HttpClient) {}

  register(usuario: Usuario){
      return this.http.post(environment.reqresApi+'register',usuario);
  }
}
