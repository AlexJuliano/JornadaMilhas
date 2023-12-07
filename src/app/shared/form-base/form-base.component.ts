import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { UnidadeFederativa } from 'src/app/Core/types/types';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {

  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);
  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>()

  constructor(
    private formBuilder: FormBuilder,
    private serviceFormulario: FormularioService
  ) {
  }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: ['Alex Juliano Araújo Da Silva', Validators.required],
      nascimento: ['12/8/2023', [Validators.required]],
      cpf: ['134156', [Validators.required]],
      cidade: ['gama', Validators.required],
      email: ['alexjuliano2011@gmail.com', [Validators.required, Validators.email]],
      senha: ['123', [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['132456789', Validators.required],
      estado: this.estadoControl,
      confirmarEmail: ['alexjuliano2011@gmail.com', [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: ['123', [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos: [true, [Validators.requiredTrue]]
    })

    this.serviceFormulario.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

}


