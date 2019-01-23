import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
// Modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
       PagesComponent,
       DashboardComponent,
       ProgressComponent,
       Graficas1Component
    ], exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    ], imports: [
       SharedModule,
       AppRoutingModule,
       PAGES_ROUTES,
       FormsModule
   ]
})
export class PagesModule {
}