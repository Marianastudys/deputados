import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { DeputadoResponse} from './deputado';

@Service()
export class DeputadoService {
    readonly API = 'https://dadosabertos.camara.leg.br/api/v2'
    readonly #http = inject(HttpClient)

    obterTodos(): Observable<DeputadoResponse> {
        return this.#http.get<DeputadoResponse>(`${this.API}/deputados?ordem=ASC&ordenarPor=nome`)
    }

    obterDeputadosPorSexo(siglaSexo: string): Observable<DeputadoResponse> {
        return this.#http.get<DeputadoResponse>(`${this.API}/deputados?siglaSexo=${siglaSexo}&ordem=ASC&ordenarPor=nome`)
    }
}
