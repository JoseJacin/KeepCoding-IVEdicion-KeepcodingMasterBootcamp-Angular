import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from "./lista-contactos/lista-contactos.component";
import { BindingComponent } from "./ejemplos/binding.component";
import { ContactosService } from "./contactos.service";
import { FormularioContactoComponent } from "./formulario-contacto/formulario-contacto.component";
import { DetallesContactoComponent } from "./detalles-contacto/detalles-contacto.component";
import { AppRoutingModule } from "./app-routing.module";
import { MisContactosComponent } from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";
import { BarraNavegacionComponent } from "./barra-navegacion/barra-navegacion.component";

@NgModule({
  // En 'imports' se añaden otros módulos de los cuáles se depende
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  // En 'declarations' se añaden todos los Componentes, Pipes y Directivas de la aplicación
  declarations: [
      AppComponent,
      ListaContactosComponent,
      BindingComponent,
      FormularioContactoComponent,
      DetallesContactoComponent,
      MisContactosComponent,
      NuevoContactoComponent,
      BarraNavegacionComponent
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