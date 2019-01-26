import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription; // referencia al observable
  // Observables
  constructor() {
    this.subscription = this.regresaObservable().pipe(
    ).subscribe( numero => console.log('Subs ', numero), // Primer Callback next
    error => console.error('Error bien jodo', error), // Segundo Callback error
    () => console.log('El observador termino!.')  // Tercer Callback cuando termino
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() { // Cada vez que salga de la pagina
  this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any>{ // Es necesario especificar el tipo de dato del observable
    return  new Observable( (observer: Subscriber<any>)  => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador ++;
        const salida = {
          valor: contador
        };
        observer.next(salida);
        if(contador === 3){
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000 );
    }).pipe(
      map(resp => { // Con el map defino como quiero que salga la informacion 
        return resp.valor;
      }),
      filter( (valor, index) => { // Debe regresar true o false, esto es solo si quiero trabajar con impares
        if ( (valor % 2) === 1){
        return true;
        } else {
          return false;
        }
      })
    );
  }

}
/*
// En vez de resolve reject en promises tenemos un observer de tipo subscriber, este ya contiene los metodos necesarios
 // viene de la libreria rxjs
    const obs = new Observable( (observer) => {
    let contador = 0;
    let intervalo = setInterval(() => {
      contador += 1;
      observer.next(contador);
      if(contador === 3){
        clearInterval(intervalo); // Esto detiene el contador pero no el observable, este sigue escuchando
        observer.complete(); // no recibe argumentos
      } 
      if(contador === 2 ){
        clearInterval(intervalo);
        observer.error('Es 2 jueputa vida!!');
      }
    }, 1000 );
  });
// Los observables tienen 3 callbacks
  obs.pipe(
    retry(2)  // Recibe como argumento el numero de reintentos despues de la ejecucion inicial
  ).subscribe( numero => console.log('Subs ', numero), // Primer Callback next
  error => console.error('Error bien jodo', error), // Segundo Callback error
  () => console.log('El observador termino!.')  // Tercer Callback cuando termino
  );
   */