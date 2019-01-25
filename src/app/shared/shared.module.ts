import { NgModule } from '@angular/core';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
        RouterModule,
        CommonModule // para usar ngfor
    ],
    declarations: [
        BreadcrumpsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ], exports: [
        BreadcrumpsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent
    ]
})
export class SharedModule { }