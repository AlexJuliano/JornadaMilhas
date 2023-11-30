import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaServiceService {

  formBuscar: FormGroup

  constructor(
    private dialog: MatDialog
  ) {
    this.formBuscar = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl("Econômica"),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),

    })
  }

  getDescricaoPassageiros(): string {
    let descricao = ''

    const adultos = this.formBuscar.get('adultos')?.value;
    if (adultos && adultos > 0) {
      descricao += `${adultos} adulto${adultos > 1 ? 's' : ''}`;
    }

    const criancas = this.formBuscar.get('criancas')?.value;
    if (criancas && criancas > 0) {
      descricao += `${descricao ? ', ' : ''}${criancas} criança${criancas > 1 ? 's' : ''}`;
    }

    const bebes = this.formBuscar.get('bebes')?.value;
    if (bebes && bebes > 0) {
      descricao += `${descricao ? ', ' : ''}${bebes} bebê${bebes > 1 ? 's' : ''}`;
    }

    return descricao
  }

  obterControle(nome: string): FormControl {
    const control = this.formBuscar.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBuscar.patchValue({
        tipo,
      })
      console.log(tipo)
    }
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }

  trocarOrigemDestino(): void {
    const origem = this.formBuscar.get('origem')?.value;
    const destino = this.formBuscar.get('destino')?.value;

    this.formBuscar.patchValue({
      origem: destino,
      destino: origem
    });
  }


}