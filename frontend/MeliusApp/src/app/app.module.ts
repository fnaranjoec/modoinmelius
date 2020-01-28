import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesRoutingModule} from './pages/pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { AuthInterceptor} from './auth/auth.interceptor';
import { NgxGaugeModule } from 'ngx-gauge';




// Importaciones para el layouts
import { UiModule } from './ui/ui.module';
import {APP_BASE_HREF} from '@angular/common';

import { ServiceComunicacion} from './core/services/service.comunicacion';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PagesRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    UiModule,
    StorageServiceModule,
    HttpModule,
    HttpClientModule,
    NgxGaugeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' },
    ServiceComunicacion,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
