import { Component} from "@angular/core";

@Component({
  selector: 'app-contador',
  template:`

  <h1>{{titulo}}</h1>
  <h3>La base es: <strong> {{base}}</strong></h3>
  
  <button (click)="acumular( base )">+{{base}}</button>
  
  <span>{{numero}}</span>
  
  <button (click)="acumular(-base)">-{{base}}</button>
  <h1>Heroe components Works  Trabajo</h1>

  ` 
})


export class ContadorComponent{

  titulo: string = 'Contador de mi App'
  numero: number = 10;
  base  : number = 5;

  acumular( valor: number){
    this.numero += valor;
  }
}