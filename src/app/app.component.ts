import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: //'<span>Laura</span>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App';
  numero: number = 10;

  sumar() {
    this.numero += 1;
  }
  restar() {
    this.numero -= 1;
  }
  acumular( valor: number ) {
    this.numero += valor;
  }
}
