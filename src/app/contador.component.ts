import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

<h1> {{ titulo }} </h1>

<!-- S4-36 -->
<button (click) = " numero = numero + 1; "> + 1 </button>
<span> {{ numero}}  </span>
<button (click) = " numero = numero - 1 "> - 1 </button> 
<br><br><br>

<!-- S4-37-38 -->
<h3> La base es: <strong> {{ base }} </strong></h3>
<button (click) = " sumar() "> + 1 </button>
<button (click) = " acumular(+1) "> Acumular + 1 </button>
<button (click) = " acumular(base) "> Acumular la base </button>
<span> {{ numero}}  </span>
<button (click) = " restar() "> - 1 </button>
<br><br><br>

<!-- S4-38 -->
<button (click) = " acumular(base) ">  + 5 </button>
<span> {{ numero}}  </span>
<button (click) = " acumular(-base) ">  - 5 </button>


    `
})


export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5
  
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