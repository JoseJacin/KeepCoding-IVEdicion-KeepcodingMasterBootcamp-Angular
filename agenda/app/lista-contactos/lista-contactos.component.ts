import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html",

})
export class ListaContactosComponent {

    // Se usa el decorador 'Input' para enlazar datos de entrada
    @Input() contactos: string[];

    // Se usa el decorador 'Output' para notificar datos de salida
    @Output() eliminar: EventEmitter<string> = new EventEmitter();

    // Se usa 'emit' para notificar eventos
    notificarEliminacion(contacto: string): void {
        this.eliminar.emit(contacto);
    }
}