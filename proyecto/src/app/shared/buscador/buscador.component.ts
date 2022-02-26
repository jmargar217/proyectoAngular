import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino: string='';
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Emite un evento con la busqueda realizada
   */
  buscar(){
    this.onEnter.emit(this.termino);
  }
}
