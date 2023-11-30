import { Component } from '@angular/core';
import { FormBuscaServiceService } from 'src/app/Core/services/form-busca-service.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  constructor(public formBuscaService: FormBuscaServiceService){}

  buscar(){
    console.log(this.formBuscaService.formBuscar.value)
  }
}
