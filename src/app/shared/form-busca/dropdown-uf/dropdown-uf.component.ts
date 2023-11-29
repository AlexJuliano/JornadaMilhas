import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from 'src/app/Core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/Core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {

  @Input() label!: string;
  @Input() iconePrefixo!: string;
  filteredOptions = [];
  unidadeFederativa: UnidadeFederativa[] = [];

  constructor(
    private unidadeFederativaService: UnidadeFederativaService
  ) {
  }

  ngOnInit(): void {
    this.unidadeFederativaService.listarEstados().subscribe( resposta => {
        this.unidadeFederativa = resposta
        console.log(resposta)
    })
  }
}