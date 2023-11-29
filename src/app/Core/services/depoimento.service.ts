import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depoimento } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
    ) { }

  listar () : Observable<Depoimento[]>{
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`)
  }

}
