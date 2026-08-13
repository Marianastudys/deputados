import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-consulta-deputados',
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {
  #deputadoService = inject(DeputadoService)
  protected deputados = signal<Deputado[]>([])
  #formBuilder = inject(FormBuilder);
  protected formDeputados: FormGroup;

 constructor(){
  this.formDeputados = this.#formBuilder.group({
       sexo: ['', [
        Validators.required,
        Validators.pattern(/^[FM]$/)
      ]]
    });
  }

  obterTodos() {
    this.#deputadoService.obterTodos().subscribe(res => {
    this.deputados.set(res.dados)
  })
  
  }
  
  obterDeputadosPorSexo(siglaSexo: string) {
     if (this.formDeputados.invalid) {
      return;
    }
    
    this.#deputadoService.obterDeputadosPorSexo(siglaSexo).subscribe(res => {
    this.deputados.set(res.dados);
  })
  }

 }

