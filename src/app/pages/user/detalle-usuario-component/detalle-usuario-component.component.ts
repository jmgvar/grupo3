import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-detalle-usuario-component',
  templateUrl: './detalle-usuario-component.component.html',
  styleUrls: ['./detalle-usuario-component.component.css']
})
export class DetalleUsuarioComponentComponent implements OnInit {

  usuario: Usuario;

  constructor(usuario: Usuario) { 
      this.usuario = usuario;
  }

  ngOnInit(): void {
  }

}
