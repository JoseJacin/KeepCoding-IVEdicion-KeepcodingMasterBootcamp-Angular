import { Component, OnInit } from "@angular/core";


import { Contacto } from "../contacto";
import { ContactosService } from "../contactos.service";

@Component({
    templateUrl: "./app/mis-contactos/mis-contactos.component.html"
})
export class MisContactosComponent implements OnInit {
    listaContactos: Contacto[];
    contactoSeleccionado: Contacto;

    // Se realiza la inyección de dependencias del servicio. Se aprovecha que TypeScript crea un atributo de aquellos
    // argumentos que tienen modificador de acceso y están tipados
    constructor(private _contactosService: ContactosService) {};

    private _actualizarListaContactos(): void {
        this._contactosService
            .obtenerContactos()
            .subscribe((contactos: Contacto[]) => this.listaContactos = contactos);
    }

    // El método 'ngOnInit' viene dado por la interfaz 'OnInit', que es el hook en el cual se inicializan los valores del componente
    ngOnInit(): void {
        this._actualizarListaContactos();
    }

    eliminarContacto(contacto: Contacto): void {
        // Se pregunta al usuario si está seguro de eliminar al contacto
        if (confirm(`Estás seguro de eliminar a ${contacto.nombre}?`)) {
            // En caso de estar seguro, se elimina el contacto
            this._contactosService
                .eliminarContacto(contacto)
                .subscribe(() => {
                    this.contactoSeleccionado = null;
                    this._actualizarListaContactos();
                });
        }
    }

    verDetallesDelContacto(contacto: Contacto): void {
        this.contactoSeleccionado = contacto;
    }

    navegarRuta(ruta: string): void {
        window.open(ruta, "_blank");
    }
}