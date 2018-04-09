import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //Declaração de variávies
  nomePortal: string; 
  cursos: string[];

  constructor(private cursosServices: CursosService ) {
    this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService();

    this.cursos = this.cursosServices.getCursos();

   }

  ngOnInit() {
  }

}
