import { Component, Inject, OnInit } from "@angular/core";
import { EjemploInyeccion1Service, EjemploInyeccion2Service, EjemploInyeccion3 } from "./inyeccion.service"

@Component({
    selector: "ejemplos-inyeccion",
    templateUrl: "./app/ejemplos/inyeccion.component.html"
})
export class InyeccionComponent implements OnInit{

    mensaje1: string;
    mensaje2: string;
    mensaje3: string;

    constructor(
        private _servicio1: EjemploInyeccion1Service,
        private _servicio2: EjemploInyeccion2Service,
        @Inject(EjemploInyeccion3) private _primitivo: string) {}

    ngOnInit(): void {
        this.mensaje1 = this._servicio1.obtenerMensaje();
        this.mensaje2 = this._servicio2.obtenerMensaje();
        this.mensaje3 = this._primitivo;
    }

}