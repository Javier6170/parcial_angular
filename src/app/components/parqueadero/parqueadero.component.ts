import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent {

  cargosTotales: number = 0;

  calcular_cargos(fechaHoraIngreso: string, fechaHoraSalida: string) {
    let fechaHoraIngreso1 = new Date(fechaHoraIngreso);
    let fechaHoraSalida1 = new Date(fechaHoraSalida);
    let hr = ((fechaHoraSalida1.getTime() - fechaHoraIngreso1.getTime()) / 1000) / 3600;
    let hrTotal = Math.abs(Math.round(hr));
    if (hrTotal <= 3) {
      return this.cargosTotales = 2000;
    }
    else if (hrTotal <= 24) {
      return this.cargosTotales += ((hrTotal-3)*500)+2000;
    }
    else {
      return this.cargosTotales = 10000;
    }
  }
}
