import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  fontSize = 14;
  @ViewChild('para', { static: true })
  para!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Cambia el tamaño de letra de toda la página en función del operador marcado (+,-)
   * @param operator
   */
  changeFont(operator:any){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontSize}px`;
  }

}
