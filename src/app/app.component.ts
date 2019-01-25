import { Component } from '@angular/core';
import { SettingsService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adminpro';
  // Solo con inyectar el servicio, se llama al constructor de este y se ejecuta la carga de ajustes
  constructor(_ajustes: SettingsService){
  }
}
