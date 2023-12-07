import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string) {
    return localStorage.setItem(KEY, token);
  }
  excluirToken() {
    return localStorage.removeItem(KEY)
  }
  retornaToken() {
    return localStorage.getItem(KEY) ?? "" // isso indica caso não tenha o token ele retorna vazio
  }
  possuiToken() {
    return !!this.retornaToken();
  }
}