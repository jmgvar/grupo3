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
    this.servicioRegistro.register(this.usuario);
    window.alert ('Usuario ' + this.usuario.email + ' registrado correctamente');
    this.router.navigate(['users']) 
  } 

}
