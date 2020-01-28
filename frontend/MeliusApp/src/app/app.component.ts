import {Component, Inject} from '@angular/core';

import { SESSION_STORAGE, LOCAL_STORAGE, StorageService, WebStorageService } from 'ngx-webstorage-service';
import {environment} from '../environments/environment';

/* IMPORTAR SERVICIOS */
import { ServiceComunicacion} from './core/services/service.comunicacion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'MeliusApp';

  isLogged=  false;
  user: any = {};

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private serviceComunicacion: ServiceComunicacion,
  ) {

    this.isLogged = this.storage.get(environment.STORAGE_ISLOGGED);
    this.user = this.storage.get(environment.STORAGE_USER_LOGGED);

    this.serviceComunicacion.isUserLoggedIn.next(this.isLogged);

  }

}
