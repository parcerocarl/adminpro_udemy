import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styles: []
})
export class BreadcrumpsComponent implements OnInit {

  titulo: string;
  constructor(private router: Router,
              private title: Title,
              private meta: Meta) {
    this.getDataRoute()
    .subscribe(data =>{
      this.titulo = data.titulo;
      this.title.setTitle(this.titulo); // Setear titulo de la pagina
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      };
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getDataRoute(){
      return this.router.events.pipe(
      // Solo me interesa los eventos router de tipo activationEnd pues ahi tengo ya poblado el titulo
      // Adicional como hay dos eventos de Activtion end me interesa el que tenga firstchild en null, ya que
      // Este es el que contiene el titulo
      filter( evento => evento instanceof ActivationEnd ) ,
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map((evento: ActivationEnd) => evento.snapshot.data) // Que quiero retornar del observable
     );
  }

}
