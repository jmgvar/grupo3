import { Component, OnInit} from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ServicioUsuarioService } from 'src/app/services/servicio-usuario.service';
import {environment} from '../../../../environments/environment'
//import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
//import { DetalleUsuarioComponentComponent } from '../detalle-usuario-component/detalle-usuario-component.component';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listado-usuarios-component',
  templateUrl: './listado-usuarios-component.component.html',
  styleUrls: ['./listado-usuarios-component.component.css']
})
export class ListadoUsuariosComponentComponent implements OnInit {
  //modalReference: NgbModalRef;
  listaUsuarios: Array<Usuario> = [];
  usuario: Usuario;
  //constructor(private userService: ServicioUsuarioService,private modalService: NgbModal, private router: Router) { 
  constructor(private http: HttpClient,private userService: ServicioUsuarioService, private router: Router) { 
    userService.getAll().subscribe(data => 
        this.listaUsuarios = data['data']);
  }

  ngOnInit(): void {
  }

  userDetails(tableRow: any) {
    this.router.navigateByUrl('/userDetails', { state: tableRow});
    //this.router.navigate(["userDetails"]);
    /*
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    console.log(tableRow)
    this.usuario  = new Usuario;
    this.usuario.id = tableRow.id;
    this.usuario.avatar = tableRow.avatar;
    this.usuario.first_name = tableRow.first_name;
    this.usuario.last_name = tableRow.last_name;
    this.usuario.email = tableRow.email;
    */
    /*
    this.modalReference = this.modalService.open(DetalleUsuarioComponentComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });
    /*
    let data = tableRow;
    
    this.modalReference.componentInstance.fromParent = data;
    this.modalReference.result.then((result) => {
      console.log(result);
    }, (reason) => {
    });
    */
  }
  addUser() {
    let usuario = new Usuario();
    this.router.navigateByUrl('/userDetails', { state: usuario});
  }
  deleteUser(tableRow: any) {
    this.usuario = tableRow;
    this.http.delete(environment.reqresApi+'users/'+this.usuario.id);
  }

}
