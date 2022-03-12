import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-grados',
  templateUrl: './resultado-grados.component.html',
  styleUrls: ['./resultado-grados.component.css']
})
export class ResultadoGradosComponent {
@Input() convfc= 0;
@Input() convcf = 0;
}
  