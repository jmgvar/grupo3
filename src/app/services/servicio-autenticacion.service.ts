import { Injectable } from '@angular/core';
import { ServicioUsuarioService } from './servicio-usuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioAutenticacionService {

  usuarios: Usuario[];
  constructor(private servicioUsuario: ServicioUsuarioService) { 
    this.servicioUsuario.getAll().subscribe(res => {
      this.usuarios = res['data'];
    });
  }

  login(email:string):boolean {
    let found = false;
    this.usuarios.forEach(usuario => {
      if(usuario.email===email){
        found=true;
      }
    });
    return found;
  }
}
