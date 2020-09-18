import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recurso } from 'src/app/model/recurso';
import { ServicioRecursoService } from 'src/app/services/servicio-recurso.service';

@Component({
  selector: 'app-detalle-recurso-component',
  templateUrl: './detalle-recurso-component.component.html',
  styleUrls: ['./detalle-recurso-component.component.css']
})
export class DetalleRecursoComponentComponent implements OnInit {

  recurso: Recurso = new Recurso();

  constructor(private recursoService: ServicioRecursoService, private route: ActivatedRoute) {
    console.log('Detalle Recurso');
    const recursoId = route.snapshot.paramMap.get('id');
    recursoService.getRecurso(recursoId).subscribe(data => {
      this.recurso = data['data'];
      console.log(this.recurso);
    });

   }

  ngOnInit(): void {
  }

}
