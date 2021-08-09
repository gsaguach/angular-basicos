

import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})

export class HeroeComponent{

    nombre: string = 'Iroman';
    edad: number = 40;

    get nombreCapitalizado() :string {
        return this.nombre.toUpperCase();
    } 

    obtenerNombre(): string{
        // return this.nombre+'-'+this.edad.toString()
        return `${ this.nombre }-${ this.edad }`;
    }

    cambiarNombre():void{
        console.log('Haaaa...')
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        console.log('Heyyy....')
        this.edad = 35;
    }


}
