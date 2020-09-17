import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  
  constructor(private http: HttpClient) { 
  }
}
