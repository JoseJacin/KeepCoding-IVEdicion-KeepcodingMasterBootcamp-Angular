import { Component, OnInit } from '@angular/core';
import { ContactosService, Contacto } from "./contactos.service";

@Component({
  // En 'selector' se indica el elemento HTML en el cuál se instanciará el componente
  selector: 'my-app',
  // En 'template' se indica la vista asociada al componente
  //template: `<h1>Hello {{name}}</h1>`,
  //En 'tamplateURL' se indica la ruta a un template externo
  templateUrl: "./app/app.component.html",
  // En 'styles' se establecen los estilos que aplican a nivel de componente
  styles: []
})
export class AppComponent implements OnInit {

    listaContactos: Contacto[];

    // Se realiza la inyección de dependencias del servicio. Se aprovecha que TypeScript crea un atributo de aquellos
    // argumentos que tienen modificador de acceso y están tipados
    constructor(private _contactosService: ContactosService) {};

    private _actualizarListaContactos(): void {
        this._contactosService.obtenerContactos()
                              .subscribe((contactos: Contacto[]) => this.listaContactos = contactos);
    }

    // El método 'ngOnInit' viene dado por la interfaz 'OnInit', que es el hook en el cual se inicializan los valores del componente
    ngOnInit(): void {
        this._actualizarListaContactos();
    }

    agregarContacto(nombreContacto: string): void {
        let contacto: Contacto = new Contacto();
        contacto.nombre = nombreContacto;

        this._contactosService.agregarContacto(contacto)
                              .subscribe((nuevoContacto: Contacto) => this._actualizarListaContactos());
    }

    eliminarContacto(contacto: string): void {
        //
        // let contacto: Contacto = new Contacto();
        // contacto.nombre = nombreContacto;

        // this._contactosService.eliminarContacto(contacto);
        // this._actualizarListaContactos();
    }
}
