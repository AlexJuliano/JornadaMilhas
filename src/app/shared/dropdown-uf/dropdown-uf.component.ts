import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UnidadeFederativaService } from 'src/app/Core/services/unidade-federativa.service';
import { UnidadeFederativa, PessoaUsuaria } from 'src/app/Core/types/types';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {

  @Input() label!: string;
  @Input() iconePrefixo!: string;
  @Input() placeholder!: string;
  @Input() control!: FormControl;


  unidadeFederativa: UnidadeFederativa[] = [];

  opcoesFiltradas$!: Observable<UnidadeFederativa[]>;

  constructor(
    private unidadeFederativaService: UnidadeFederativaService
  ) {
  }

  ngOnInit(): void {
    this.unidadeFederativaService.listarEstados().subscribe(resposta => {
      this.unidadeFederativa = resposta
    })

    this.opcoesFiltradas$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtroDeUfs(value)
      )
    )
  }


  private filtroDeUfs(valor: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof valor === 'string' ? valor : valor?.nome;
    const valorRecebidoConvertidoParaMinusculo = nomeUf?.toLowerCase();
    const filtrado = this.unidadeFederativa.filter(estado =>
      estado.nome.toLowerCase().includes(valorRecebidoConvertidoParaMinusculo)
    )
    return filtrado;
  }

  displayFn(unidadeFederativa: UnidadeFederativa): string {
    return unidadeFederativa && unidadeFederativa.nome ? unidadeFederativa.nome : '';
  }


}