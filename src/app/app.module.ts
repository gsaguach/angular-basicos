import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contadorModule';
// import { ContadorComponent } from './contador/contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';


// Tarea:
// Crear un modelo llamada ContadorModule
// declaraciones y exportaciones para poder utilizar este ContadorComponent

@NgModule({
  declarations: [
    AppComponent

    // ContadorComponent -- Removido despues
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
    //Importar Aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
