import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuscaServiceService } from 'src/app/Core/services/form-busca-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public formBuscaService: FormBuscaServiceService) { }


}
