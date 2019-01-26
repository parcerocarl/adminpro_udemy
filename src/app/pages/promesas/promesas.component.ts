import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then(
      mensaje => console.log('termino!', mensaje)
     // () => console.log('error!')  catch o reject
    ).catch(error => console.error('Error en promesa', error));

  }

  ngOnInit() {
  }

  contarTres(): Promise <boolean> {
    return new Promise((resolve, reject) =>{
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3){
          resolve(true);
          // reject('un error'); en caso de que llamara el reject
          clearInterval(intervalo); // De lo contrario el contador seguiria para siempre
        }
      }, 1000);
    });
  }

}

/*Ejemplo de una promesa
let promesa = new Promise((resolve, reject) =>{
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if(contador === 3){
          resolve('Sabrosura');
          // reject('un error'); en caso de que llamara el reject
          clearInterval(intervalo); // De lo contrario el contador seguiria para siempre
        }
      }, 1000);
    });

    promesa.then(
      (mensaje) => console.log('termino!', mensaje)
     // () => console.log('error!')  catch o reject
    ).catch(error => console.error('Error en promesa', error));
*/