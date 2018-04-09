
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
   
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.componet';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { CursosModule } from './cursos/cursos.module';

//Decorator NgModule que faz parte do Angular Core
@NgModule({
  //Metadado declarations: composto por todos os componentes, diretivas e pipes que a forem utilizadas neste módulo.
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent
  ],
  //Metadado imports: composto por módulos adicionais
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  //Metadado provides: todos os serviços disponíveis para todos os componentes declarados neste módulo e serviços que estarão expostos a app global
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
