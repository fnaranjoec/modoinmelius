import { Component, Inject, Injectable, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService, WebStorageService } from 'ngx-webstorage-service';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {environment} from '../../../../environments/environment';

/* SERVICIOS */
import { ServiceComunicacion} from '../../../core/services/service.comunicacion';

@Component({
  selector: 'app-header',
  template: `
    <header class="header-1">
      <div class="branding">
        <a (click)="router.navigate(['/pages/home'])" class="nav-link">
          <!--clr-icon shape="shield"></clr-icon-->
          <img src="../../../../assets/images/logo/logo.png" style="width: 60px"/>
          <span class="title">ModoInMelius App</span>
        </a>
      </div>
      <div class="header-nav">
        <a (click)="router.navigate(['/pages/home'])" class="active nav-link nav-icon">
          <clr-icon shape="home"></clr-icon>
        </a>
        <a (click)="router.navigate(['/pages/dashboard'])" class=" nav-link nav-icon">
          <clr-icon shape="cog"></clr-icon>
        </a>
      </div>
      <form class="search">
        <label for="search_input">
          <input id="search_input" type="text" placeholder="Search for keywords...">
        </label>
      </form>
      <div class="header-actions">
        <a (click)="login()" class="nav-link nav-icon"  *ngIf="!isLogged">
          <clr-icon shape="login"></clr-icon>
        </a>
        <clr-dropdown *ngIf="isLogged" class="dropdown bottom-right">
          <button class="nav-icon" clrDropdownToggle>
            <clr-icon shape="user"></clr-icon>
            <clr-icon shape="caret down"></clr-icon>
            <div class="align-left" >
              <p style="font-size: x-small ;text-align: left ;margin-top: 40px">{{usuario.CNomPersona}}</p>
            </div>
          </button>
          
          <div class="dropdown-menu" style="margin-top: 10px">
            <a clrDropdownItem>About</a>
            <a clrDropdownItem>Preferences</a>
            <a clrDropdownItem (click)="logout()" >Log out</a>
          </div>
        </clr-dropdown>
      </div>
    </header>
    <nav class="subnav" *ngIf="isLogged">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Users</a>
        </li>
      </ul>
    </nav>
  `,
  styles: [],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ],
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  usuario: any = {};
  location: Location;


  constructor(
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    location: Location,
    private serviceComunicacion: ServiceComunicacion

  ) {
    this.location = location;

    this.serviceComunicacion.isUserLoggedIn.subscribe( value => {
      this.isLogged = value;
    });

   }

  ngOnInit() {
    this.usuario = this.storage.get(environment.STORAGE_USER_LOGGED);
    console.log(JSON.stringify(this.usuario));
  }

  login() {
    console.log('login')
    this.router.navigate(['/auth/login']);
  }

  logout() {
    console.log('logout')
    this.storage.set(environment.STORAGE_ISLOGGED, false);
    this.storage.set(environment.STORAGE_USER_LOGGED, null);
    this.serviceComunicacion.isUserLoggedIn.next(false);
    this.router.navigate(['/pages/home']);

  }


}
