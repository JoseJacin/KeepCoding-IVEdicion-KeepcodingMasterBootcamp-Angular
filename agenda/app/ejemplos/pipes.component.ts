import { Component, OnInit } from "@angular/core";
import { SlicePipe } from "@angular/common";

@Component({
    selector: "ejemplos-pipes",
    templateUrl: "./app/ejemplos/pipes.component.html"
})
export class EjemplosPipesComponent implements OnInit {

    cantidad: number = 32.7;

    mensaje: string = "HoLa! BuEnAs NoChEs KeEpCoDeRs!";

    coleccion: string[] = [
        "uno",
        "dos",
        "tres",
        "cuatro",
        "cinco"
    ];

    coleccionTroceada: string[];

    constructor(private _slicePipe: SlicePipe) {}

    ngOnInit(): void {
        this.coleccionTroceada = this._slicePipe.transform(this.coleccion, 2, 4);
    }
}