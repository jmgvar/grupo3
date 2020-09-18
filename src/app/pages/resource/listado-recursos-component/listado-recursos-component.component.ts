import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recurso } from "../../../model/recurso";
import { ServicioRecursoService} from "../../../services/servicio-recurso.service"

@Component({
  selector: 'app-listado-recursos-component',
  templateUrl: './listado-recursos-component.component.html',
  styleUrls: ['./listado-recursos-component.component.css']
})
export class ListadoRecursosComponentComponent implements OnInit {

  constructor(private recursoService: ServicioRecursoService) { }

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

}
