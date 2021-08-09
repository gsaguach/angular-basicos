import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// import { ListadoComponent } from "../heroes/listado/listado.component";
import { ContadorComponent } from "./contador/contador.component";


@NgModule({
    declarations:[
        ContadorComponent,
        // ListadoComponent        
    ],
    exports:[
         ContadorComponent
        // ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})

export class ContadorModule{}
