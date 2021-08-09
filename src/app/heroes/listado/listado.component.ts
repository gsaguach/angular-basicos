import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  // styleUrls: ['./listado.component.css']
})

export class ListadoComponent{
 heroes: string[]=['Spiderman','Iroman','Hulk','Tnor','Capitan America'];
 heroeBorrado: string = '';

 
 borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';

  // this.heroes.splice(3,1);
    // console.log('Borrando...');    
  }

}



// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]


// export class ListadoComponent implements OnInit {

//   constructor() {
//     console.log('constructor');

//    }


//   ngOnInit(): void {
//     console.log('ngOnInit')
//   }

// }
