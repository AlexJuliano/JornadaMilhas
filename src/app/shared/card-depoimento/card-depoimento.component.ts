import { Component, Input, OnInit } from '@angular/core';
import { DepoimentoService } from './../../Core/services/depoimento.service';
import { Depoimento } from 'src/app/Core/types/types';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {

  @Input() depoimento!: Depoimento;


}
