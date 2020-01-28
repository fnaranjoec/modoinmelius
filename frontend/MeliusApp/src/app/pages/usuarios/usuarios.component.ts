import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

/* IMPORTAR SERVICIOS */
import { ServiceUsuario} from '../../core/services/service.usuario';


@Component({
  selector: 'app-usuarios',
  template: `
    <div>
      <h2>Usuarios</h2>
      <clr-datagrid [clrDgLoading]="isLoading">
        <clr-dg-column [clrDgField]="'CNomProducto'">Nombre</clr-dg-column>
        <clr-dg-column [clrDgField]="'CNomProducto'">Usuario</clr-dg-column>
        <clr-dg-column [clrDgField]="'CNomProducto'">Clave</clr-dg-column>
        <clr-dg-column [clrDgField]="'CNomProducto'">Correo</clr-dg-column>

        <clr-dg-placeholder>Test placeholder here</clr-dg-placeholder>

        <clr-dg-row *clrDgItems="let item of usuarios">
          <clr-dg-cell>{{item.CNomPersona}}</clr-dg-cell>
          <clr-dg-cell>{{item.CNomUsuario}}</clr-dg-cell>
          <clr-dg-cell>{{item.CTxClave}}</clr-dg-cell>
          <clr-dg-cell>{{item.CTxCorreo}}</clr-dg-cell>
        </clr-dg-row>

        <clr-dg-footer>
          <clr-dg-pagination #pagination [clrDgPageSize]="10">
            <clr-dg-page-size [clrPageSizeOptions]="[10,20,50,100]">Usuarios por pagina</clr-dg-page-size>
            {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
            of {{pagination.totalItems}} usuarios
          </clr-dg-pagination>
        </clr-dg-footer>
      </clr-datagrid>
    </div>
  `,
  styles: [],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ]
})
export class UsuariosComponent implements OnInit {

  public usuarios = [];
  public page;
  public pageSize;
  public collectionSize;
  isLoading = true;
  selected: any;

  constructor(
    private serviceUsuario: ServiceUsuario,

  ) { }

  async ngOnInit() {

    const responseService: any = await new Promise<any> (
      (exec) => this.serviceUsuario.todos().subscribe(
        (data: any) => { exec(data); },
        (error: any) => { exec(error); },
        () => {}
      )

    );

    if (responseService.success) {
      this.usuarios = responseService.usuarios;
      this.page = 1;
      this.pageSize = 5;
      this.collectionSize = this.usuarios.length;
      this.isLoading = false;
      this.selected = this.usuarios[0];

    } else {
      this.usuarios = [];
    }

  }

}
