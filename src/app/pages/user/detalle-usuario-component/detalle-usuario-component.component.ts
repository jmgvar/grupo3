import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';
import {environment} from '../../../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-usuario-component',
  templateUrl: './detalle-usuario-component.component.html',
  styleUrls: ['./detalle-usuario-component.component.css']
})
export class DetalleUsuarioComponentComponent implements OnInit {

  usuario: Usuario;

  constructor(private http: HttpClient,private router:Router) { 
    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
    this.usuario=history.state;
  }

  saveUser() {
    this.http.post(environment.reqresApi+'users',this.usuario);
    this.router.navigateByUrl('/users', {});
  }
}
