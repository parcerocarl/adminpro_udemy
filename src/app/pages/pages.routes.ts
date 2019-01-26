import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes =[
    {
        path: '',
        component: PagesComponent,
        children: [
            // data es una propiedad opcional para definir mas info
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Barras de Progreso' }},
            { path: 'grafica1', component: Graficas1Component, data: { titulo: 'Graficas' }},
            { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' }},
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Usuario' }},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];
// For root se usa dentro de la ruta principal pero como estas son rutas secundarias usamos forchild
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );