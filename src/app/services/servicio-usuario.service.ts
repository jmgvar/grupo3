import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor(private http: HttpClient) {}

  addOrUpdate(usuario: Usuario){
    if(usuario.id!=undefined){
      return this.http.post(environment.reqresApi+'users',usuario);
    }else{
      return this.http.put(environment.reqresApi+'users',usuario);
    }
  }

  get(id: String){
    return this.http.get(environment.reqresApi+'users/'+id);
  }

  getAll(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(environment.reqresApi+'users');
  }

  delete(id: String){
    return this.http.delete(environment.reqresApi+'users/'+id);
  }
}
