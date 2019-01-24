import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  //Recibe como parametro obligatorio una referencia a un elemento html por eso el ElementRef
  @ViewChild('txtProgress') txtProgress: ElementRef;

  //El input es porque cualquiera de estas dos variables puede venir de afuera
  /*Si queremos que en la clase la variable se llame leyenda pero que al momento
  de enviarla tenga un nombre distinto colocamos ese nombre dentro del input asi
  @Input('perro')*/
   @Input() progreso: number = 50;
   @Input() leyenda: string='Leyenda';

  // Se les puede cambiar el nombre como a los inputs
   @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    // Se ejecuta primero al iniciar la clase mas no el componente
    // console.log(`Leyenda ${this.leyenda} Progreso ${this.progreso}`);
  }

  ngOnInit() {
    // Se ejecuta cuando el componente esta listo, esto es para cada componente
    // console.log(`Leyenda ${this.leyenda} Progreso ${this.progreso}`);
  }

  cambiarValor( valor: number){
    if( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if( this.progreso <= 0 && valor < 0) {
      this.progreso= 0;
      return;
    }
    this.progreso = this.progreso + valor;
    // Emitir el valor de progreso cuando lo cambiamos
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

  onChanges(newValue: number){
    /*let elementHTML:any = document.getElementsByName('progreso')[0];
   La anterior linea es si solo utilizara un elmento ya que tengo 2 con el nombre de name y solo
   estamos obteniendo el primero */
   if(newValue >= 100 ){
      this.progreso = 100;
    } else if(newValue <= 0){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

}
