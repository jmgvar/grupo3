import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { ServicioAutenticacionService } from '../../../services/servicio-autenticacion.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  usuario: Usuario;
  constructor(private authService:ServicioAutenticacionService,private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void{
    if(this.authService.login('eve.holt@reqres.in')==true){
      this.router.navigate(['users'])
    }else{
      window.alert ('¡El usuario ' + this.usuario.email + ' no existe!');
    }
  }
}
