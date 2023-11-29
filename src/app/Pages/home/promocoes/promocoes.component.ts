import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/Core/services/promocao.service';
import { Promocao } from 'src/app/Core/types/types';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit{

  promocao!: Promocao[];


  constructor(
    private promocaoService: PromocaoService,
  ) { }

    ngOnInit(): void {
      this.promocaoService.listar().subscribe( 
        retorno => {
        this.promocao = retorno;
      } )

    }

}
