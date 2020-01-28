import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService, WebStorageService } from 'ngx-webstorage-service';

import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

import { environment } from '../../../environments/environment';

/* IMPORTAR SERVICIOS */
import { ServiceLogin} from '../../core/services/service.login';
import { ServiceComunicacion} from '../../core/services/service.comunicacion';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-wrapper">
      <form class="login">
        <section class="title">
          <h3 class="welcome">Bienvenido a</h3>
          ModoInMelius S. A.
          <h5 class="hint">Use su indentificaci&oacute;n de la compa&ntilde;ia o cree una ahora</h5>
        </section>
        <div class="login-group">
          <clr-select-container>
            <label class="clr-sr-only">Roles</label>
            <select clrSelect name="type" [(ngModel)]="form.type" >
              <option value="local">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
          </clr-select-container>
          <clr-input-container>
            <label class="clr-sr-only">Username</label>
            <input type="text" (change)="this.errorCredenciales=false"  name="username" clrInput placeholder="Nombre de usuario" [(ngModel)]="form.username"/> 
          </clr-input-container>
          <clr-password-container>
            <label class="clr-sr-only">Password</label>
            <input type="password" (change)="this.errorCredenciales=false" name="password" clrPassword placeholder="Contraseña" [(ngModel)]="form.password" /> 
          </clr-password-container>
          <clr-checkbox-wrapper>
            <label>Recordarme</label>
            <input type="checkbox" name="rememberMe" clrCheckbox [(ngModel)]="form.rememberMe"/> 
          </clr-checkbox-wrapper>
          <div class="error active" *ngIf="errorCredenciales">
            Invalid user name or password
          </div>
          <button type="button" (click)="submit()" class="btn btn-primary">ENTRAR</button> <!-- type="submit"  -->
          <a href="javascript://" class="signup">Crear una cuenta en la empresa</a>
        </div>
      </form>
    </div>

  `,
  styles: [],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ]

})
export class LoginComponent implements OnInit {

   public form: any = {};
   public errorCredenciales = false;

   constructor(
    private router: Router,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,
    private location: Location,
    private serviceLogin: ServiceLogin,
    private serviceComunicacion: ServiceComunicacion

  ) {
  }

  ngOnInit() {
     this.form.type = 'local';
  }


  async submit() {
      const responseService: any = await new Promise<any> (
      (exec) => this.serviceLogin.login(this.form.username, this.form.password).subscribe(
        (data: any) => { exec(data); },
        (error: any) => { exec(error); },
        () => {}
      )

      /*
      setTimeout(() => {
      },1000)
      */

    );

    if (responseService.success) {
      console.log('validado');
      this.storage.set(environment.STORAGE_ISLOGGED, true);
      this.storage.set(environment.STORAGE_USER_LOGGED, responseService.usuario);
      this.serviceComunicacion.isUserLoggedIn.next(true);

      this.router.navigate(['/pages/dashboard']);

    } else {
      console.log('NO validado');
      this.errorCredenciales = true;
    }

  }


}
