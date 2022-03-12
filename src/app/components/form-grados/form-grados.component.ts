import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-grados',
  templateUrl: './form-grados.component.html',
  styleUrls: ['./form-grados.component.css']
})
export class FormGradosComponent  {
  @Output() valorFahrenheit= new EventEmitter<number>();
  @Output() valorCentigrados = new EventEmitter<number>();

  convfc: number = 0;
  convcf: number = 0;

  convertirFahrenheitCentigrados(){
    this.valorFahrenheit.emit(this.convfc);
  }

  convertirCentigradosFahrenheit(){
    this.valorCentigrados.emit(this.convcf)
  }
}
