import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  //Controle de componentes que são exportados para serem "enxergados" em outros módulos
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
