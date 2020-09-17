import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ServicioUsuarioService } from 'src/app/services/servicio-usuario.service';

@Component({
  selector: 'app-listado-usuarios-component',
  templateUrl: './listado-usuarios-component.component.html',
  styleUrls: ['./listado-usuarios-component.component.css']
})
export class ListadoUsuariosComponentComponent implements OnInit {

  listaUsuarios: Array<Usuario> = [];

  constructor(private userService: ServicioUsuarioService) { 

    userService.getAll().subscribe(data => 
        this.listaUsuarios = data['data']);

  }

  ngOnInit(): void {
  }

}
