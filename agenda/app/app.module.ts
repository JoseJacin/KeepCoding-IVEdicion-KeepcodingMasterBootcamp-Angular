import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from "./lista-contactos/lista-contactos.component";
import { BindingComponent } from "./ejemplos/binding.component";
import { ContactosService } from "./contactos.service";
import { FormularioContactoComponent } from "./formulario-contacto/formulario-contacto.component";

@NgModule({
  // En 'imports' se añaden otros módulos de los cuáles se depende
  imports:      [
      BrowserModule,
      FormsModule
  ],
  // En 'declarations' se añaden todos los Componentes, Pipes y Directivas de la aplicación
  declarations: [
      AppComponent,
      ListaContactosComponent,
      BindingComponent,
      FormularioContactoComponent
  ],
  // En 'providers' se añaden todos los servicios de la aplicacion
  providers: [
      ContactosService
  ],
  // En 'boostrap' se indica el componente raíz de la aplicación
  bootstrap:    [
      AppComponent
      // BindingComponent
  ]
})
export class AppModule { }