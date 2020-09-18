import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recurso } from "../../../model/recurso";
import { ServicioRecursoService} from "../../../services/servicio-recurso.service"

@Component({
  selector: 'app-listado-recursos-component',
  templateUrl: './listado-recursos-component.component.html',
  styleUrls: ['./listado-recursos-component.component.css']
})
export class ListadoRecursosComponentComponent implements OnInit {

  
  constructor(private recursoService: ServicioRecursoService, private router: Router) {
  
   }

  recursos: Observable<any[]>;
  recursoInicial: Recurso;
  

  ngOnInit(): void {
    this.recursoService.getAll().subscribe(data => {
      this.recursos = data['data'];
      console.log(this.recursos)
    });
    // Inicializamos el recurso
    this.recursoInicial = new Recurso();
  }

  deleteResource(id:String):void {  
    
      alert(id)
  }

  recursoDetails(tableRow: any) {
    this.router.navigateByUrl('/detail', { state: tableRow});
  }
}
