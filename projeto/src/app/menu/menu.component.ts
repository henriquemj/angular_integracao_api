import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public texto:string | any
  constructor() {}

  ngOnInit(): void {
    this.texto = "Teste"
  }

  clicou(){
    this.texto = "clicou"
  }

}
