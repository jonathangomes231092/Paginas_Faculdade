import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } 
from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CadastroFaculdadeComponent } from './pages/cadastro-faculdade/cadastro-faculdade.component';
import { ConsultaFaculdadeComponent } from './pages/consulta-faculdade/consulta-faculdade.component';
import { EdicaoFaculdadeComponent } from './pages/edicao-faculdade/edicao-faculdade.component';

import { ProvasFaculdadeComponent } from './pages/provas-faculdade/provas-faculdade.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consulta-faculdade' },
  { path: 'cadastro-faculdade', component: CadastroFaculdadeComponent },
  { path: 'consulta-faculdade', component: ConsultaFaculdadeComponent },
  { path: 'edicao-faculdade', component: EdicaoFaculdadeComponent },
  { path: 'provas-faculdade', component: ProvasFaculdadeComponent }
  ];
   

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroFaculdadeComponent,
    ConsultaFaculdadeComponent,
    EdicaoFaculdadeComponent,
    
    ProvasFaculdadeComponent,
    
  ],
  imports: [
    BrowserModule,

    FormsModule, //formulários reativos
    ReactiveFormsModule, //formulários reativos


    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
