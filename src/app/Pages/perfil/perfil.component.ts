import { Component, OnInit } from '@angular/core';
import { PessoaUsuaria } from 'src/app/Core/types/types';
import { TokenService } from './../../Core/services/token.service';
import { CadastroService } from 'src/app/Core/services/cadastro.service';
import { FormGroup } from '@angular/forms';
import { FormularioService } from 'src/app/Core/services/formulario.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  titulo = 'Olá '
  tituloBotao = 'ATUALIZAR'
  perfilComponent: boolean = true;

  token = '';
  cadastro!: PessoaUsuaria;
  nome = '';

  form!: FormGroup<any> | null

  constructor(
    private tokenService: TokenService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.token = this.tokenService.retornaToken();
    console.log(this.token);
    this.cadastroService.buscarCadastro().subscribe(cadastro => {
      this.cadastro = cadastro
      this.nome = cadastro.nome
      this.carregarFormulario();
    })
  }

  carregarFormulario() {
    this.form = this.formularioService.getCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone, email: this.cadastro.email,
      senha: this.cadastro.senha,
      cidade: this.cadastro.cidade,
      estado: this.cadastro.estado,
      genero: this.cadastro.genero
    })


  }

  atualizar() {
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado: this.form?.value.estado
    }

    this.cadastroService.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastrp editado com sucesso');
        this.router.navigate(['/']);
      },

      error: (err) => {
        console.log('Erro ao atualizar cadastro ', err)
      }
    })
  }

  deslogar() {
    this.userService.logout();
    this.router.navigate(['/login'])


  }
}
