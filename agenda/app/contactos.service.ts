import { Injectable } from "@angular/core";

// Para que una clase se comporte como un servicio, es necesario decorarla con 'Injectable'
@Injectable()
export class ContactosService {
    contactos: string[];

    private _contactos = [
        "Tim Cook",
        "Bill Gates",
        "Elon Musk"
    ];

    //Método que devuelve la colección de contactos
    obtenerContactos(): string[] {
        return this._contactos;
    }
}