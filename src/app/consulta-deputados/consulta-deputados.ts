import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';
import { NgClass } from "../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-consulta-deputados',
  imports: [NgClass],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {
  #deputadoService = inject(DeputadoService)
  protected deputados = signal<Deputado[]>([])
 constructor(){
  this.#deputadoService.obterTodos().subscribe(res => {
    this.deputados.set(res.dados)
  })
 }
}
