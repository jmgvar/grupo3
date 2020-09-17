import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { ServicioRegistroService } from '../../../services/servicio-registro.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  usuario: Usuario;
  constructor(private servicioRegistro:ServicioRegistroService,private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  register(): void{
    if(this.isEmpty(this.usuario.email) || this.isEmpty(this.usuario.password)){
      window.alert ('!Introducir usuario y password¡');
    }else{
      this.servicioRegistro.register(this.usuario);
      window.alert ('Usuario ' + this.usuario.email + ' registrado correctamente');
      this.router.navigate(['users']) 
    }
  } 
  isEmpty(obj: any) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}
}
