import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent} from './home/home.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UsuariosComponent} from './usuarios/usuarios.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    DashboardComponent,
    UsuariosComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule,
      providers: []
    } as ModuleWithProviders;
  }
}
