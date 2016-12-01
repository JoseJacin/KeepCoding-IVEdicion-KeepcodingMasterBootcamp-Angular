import { Component, OnInit } from '@angular/core';
import { ContactosService } from "./contactos.service";

@Component({
  // En 'selector' se indica el elemento HTML en el cuál se instanciará el componente
  selector: 'my-app',
  // En 'template' se indica la vista asociada al componente
  //template: `<h1>Hello {{name}}</h1>`,
  //En 'tamplateURL' se indica la ruta a un template externo
  templateUrl: "./app/app.component.html",
  // En 'styles' se establecen los estilos que aplican a nivel de componente
  styles: [
      "h1 { color: dodgerblue; }"
  ]
})
export class AppComponent implements OnInit {

    listaContactos: string[];

    // Se realiza la inyección de dependencias del servicio. Se aprovecha que TypeScript crea un atributo de aquellos
    // argumentos que tienen modificador de acceso y están tipados
    constructor(private _contactosService: ContactosService) {};

    // El método 'ngOnInit' viene dado por la interfaz 'OnInit', que es el hook en el cual se inicializan los valores del componente
    ngOnInit(): void {
        this.listaContactos = this._contactosService.obtenerContactos();
    }

    eliminarContacto(contacto: string): void {
        this.listaContactos = this.listaContactos
            .filter((c: string) => c !== contacto);
    }
}
