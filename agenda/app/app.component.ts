import { Component } from '@angular/core';

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
export class AppComponent {
}
