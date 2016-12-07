import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SlicePipe } from "@angular/common";

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from "./lista-contactos/lista-contactos.component";

import { ContactosService } from "./contactos.service";
import { FormularioContactoComponent } from "./formulario-contacto/formulario-contacto.component";
import { DetallesContactoComponent } from "./detalles-contacto/detalles-contacto.component";
import { AppRoutingModule } from "./app-routing.module";
import { MisContactosComponent } from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";
import { BarraNavegacionComponent } from "./barra-navegacion/barra-navegacion.component";
import { ContactosResolve } from "./contactos-resolve.service";
import { OrdenPipe } from "./orden.pipe";

// Components de ejemplo
import { BindingComponent } from "./ejemplos/binding.component";
import { EjemplosPipesComponent } from "./ejemplos/pipes.component";
import { DirectivaAtributoDirective } from "./ejemplos/directiva-atributo.directive";
import { DirectivaComponent } from "./ejemplos/directiva.component";
import { DirectivaEstructuralDirective } from "./ejemplos/directiva-estructural.directive";

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
      EjemplosPipesComponent,
      FormularioContactoComponent,
      DetallesContactoComponent,
      MisContactosComponent,
      NuevoContactoComponent,
      BarraNavegacionComponent,
      OrdenPipe,
      EjemplosPipesComponent,
      DirectivaAtributoDirective,
      DirectivaComponent,
      DirectivaEstructuralDirective
  ],
  // En 'providers' se añaden todos los servicios de la aplicacion
  providers: [
      ContactosService,
      ContactosResolve,
      SlicePipe
  ],
  // En 'boostrap' se indica el componente raíz de la aplicación
  bootstrap:    [
      AppComponent
      // BindingComponent
      // EjemplosPipesComponent
      // DirectivaComponent
  ]
})
export class AppModule { }