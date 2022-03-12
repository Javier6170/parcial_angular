import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conversion-grados',
  templateUrl: './conversion-grados.component.html',
  styleUrls: ['./conversion-grados.component.css']
})
export class ConversionGradosComponent {


  convfc = 0;
  convcf = 0;

  convertirFahrenheitCentigrados(valorFahrenheit: number) {
    this.convfc = 5.0 / 9.0 * (valorFahrenheit - 32);
  }

  convertirCentigradosFahrenheit(valorCentigrados: number) {
    this.convcf = 9.0 / 5.0 * (valorCentigrados) + 32;
  }


}
