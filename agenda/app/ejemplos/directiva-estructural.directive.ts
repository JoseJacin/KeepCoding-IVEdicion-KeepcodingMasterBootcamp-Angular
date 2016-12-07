import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core"

@Directive({
    selector: "[jsrConRetraso]"
})
export class DirectivaEstructuralDirective {

    @Input("jsrConRetraso") set retraso(milisegundos: number) {
        setTimeout(() => {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }, milisegundos);
    }

    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef) { }
}