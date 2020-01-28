import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


/* SERVICIOS */
import {ServiceComunicacion} from '../../../core/services/service.comunicacion';

@Component({
  selector: 'app-sidebar',
  template: `
    <nav>
      <section class="sidenav-content" *ngIf="isLogged">
        <a class="nav-link active">Overview</a>
        <section class="nav-group collapsible">
          <input id="tabexample1" type="checkbox">
          <label for="tabexample1">Content</label>
          <ul class="nav-list">
            <li><a class="nav-link" (click)="clickMenu('productos')">Productos</a></li>
            <li><a class="nav-link">Projects</a></li>
            <li><a class="nav-link">Reports</a></li>
          </ul>
        </section>
        <section class="nav-group collapsible">
          <input id="tabexample2" type="checkbox">
          <label for="tabexample2">System</label>
          <ul class="nav-list">
            <li><a class="nav-link">Users</a></li>
            <li><a class="nav-link">Settings</a></li>
          </ul>
        </section>
      </section>

      <section class="sidenav-content" *ngIf="!isLogged">
        <ul class="nav-list">
          <li><a class="nav-link">Inicio</a></li>
          <li><a class="nav-link">Quienes Somos</a></li>
          <li><a class="nav-link">Servicios</a></li>
          <li><a class="nav-link">Contactos</a></li>
        </ul>
      </section>
    </nav>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  isLogged=false;

  constructor(
    private serviceComunicacion: ServiceComunicacion,
    private router: Router,
  ) {
    this.serviceComunicacion.isUserLoggedIn.subscribe( value => {
      this.isLogged = value;
    });

  }

  ngOnInit() {
  }

  clickMenu(opcion) {
    console.log(opcion);

    switch (opcion) {
      case 'productos':
        this.router.navigate(['/pages/productos']);
        break;
      default:
        break;
    }

  }

}
