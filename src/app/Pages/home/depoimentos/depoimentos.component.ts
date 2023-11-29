import { Component } from '@angular/core';
import { DepoimentoService } from 'src/app/Core/services/depoimento.service';
import { Depoimento } from 'src/app/Core/types/types';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent {

  depoimento!: Depoimento[];

  constructor(
    private depoimentoService: DepoimentoService
  ) { }

  ngOnInit(): void {

    this.depoimentoService.listar().subscribe(resposta => {
      this.depoimento = resposta
    })
  }

}
