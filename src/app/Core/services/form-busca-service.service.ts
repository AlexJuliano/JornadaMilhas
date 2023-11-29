import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaServiceService {

  formBuscar: FormGroup

  constructor() {

    this.formBuscar = new FormGroup({
      somenteIda:  new FormControl(false),
      
      
    })
  }
}
