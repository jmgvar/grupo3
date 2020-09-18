import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recurso } from 'src/app/model/recurso';
import { ServicioRecursoService } from 'src/app/services/servicio-recurso.service';

@Component({
  selector: 'app-detalle-recurso-component',
  templateUrl: './detalle-recurso-component.component.html',
  styleUrls: ['./detalle-recurso-component.component.css']
})
export class DetalleRecursoComponentComponent implements OnInit {

  recurso: Recurso;



   constructor(private http: HttpClient,private router:Router) { 
     console.log(this.router.getCurrentNavigation().extras.state);
   }
 
   ngOnInit(): void {
     this.recurso=history.state;
   }



}
