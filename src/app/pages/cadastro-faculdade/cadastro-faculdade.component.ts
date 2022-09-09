import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-faculdade',
  templateUrl: './cadastro-faculdade.component.html',
  styleUrls: ['./cadastro-faculdade.component.css']
})
export class CadastroFaculdadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
    formCadastro = new FormGroup({ 
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150)
      ]),
      //campo
      aluno: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150)
      ]),
      //campo
      turma: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(150)
      ]),
      //campo
      materias: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(150)
        ]),
        professor: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(150)
          ]),
      });
      //função utilizada para exibir os erros de validação
      //dos campos na página HTML
      get form(): any {
      return this.formCadastro.controls;

  
  }  }
