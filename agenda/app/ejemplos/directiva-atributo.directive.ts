import { Directive, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive ({
    selector: "[jsrImportante]"
})
export class DirectivaAtributoDirective {

    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer) { }

    @HostListener("mouseenter") marcarComoImportante() {
        this._renderer.setElementStyle(
            this._elementRef.nativeElement,
            "background-color",
            "#666"
        );
    }

    @HostListener("mouseleave") desmarcarComoImportante() {
        this._renderer.setElementStyle(
            this._elementRef.nativeElement,
            "background-color",
            "transparent"
        );
    }
}