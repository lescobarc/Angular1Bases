import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'vegeta',
      poder: 7500
    }
  ];
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 18000
  }

  /* agregar(  ){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    console.log(this.nuevo)
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }  */

  /* cambiarNombre( event: any ){
    console.log(event.target.value)
  } */


  agregarNuevoPersonaje(argumento: Personaje) {
    console.log('Main page component');
    console.log(argumento);
    this.personajes.push(argumento);
  }

  constructor(private dbzService: DbzService) {
    
  }
}
