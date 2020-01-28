import { ModuleWithProviders, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent} from './auth.component';
import { LoginComponent} from './login/login.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: AuthModule,
  //     providers: []
  //   } as ModuleWithProviders;
  // }
}
