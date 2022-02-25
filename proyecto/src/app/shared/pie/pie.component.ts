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
  changeFont(operator:any){
    operator === '+' ? this.fontSize++ : this.fontSize--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontSize}px`;
  }

}
