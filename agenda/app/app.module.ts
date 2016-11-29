import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from "./lista-contactos/lista-contactos.component";

@NgModule({
  // En 'imports' se añaden otros módulos de los cuáles se depende
  imports:      [ BrowserModule ],
  // En 'declarations' se añaden todos los Componentes, Pipes y Directivas de la aplicación
  declarations: [
      AppComponent,
      ListaContactosComponent
  ],
  // En 'providers' se añaden todos los servicios de la aplicacion
  providers: [],
  // En 'boostrap' se indica el componente raíz de la aplicación
  bootstrap:    [ AppComponent ]
})
export class AppModule { }