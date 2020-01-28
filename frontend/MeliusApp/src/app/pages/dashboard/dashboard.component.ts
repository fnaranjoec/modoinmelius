import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


/* IMPORTAR SERVICIOS */
import { ServiceProducto} from '../../core/services/service.producto';
import { ServiceUsuario} from '../../core/services/service.usuario';

@Component({
  selector: 'app-dashboard',
  template: `
    <ngx-gauge [type]="gaugeTypeProd"
               [value]="gaugeValueProd"
               [label]="gaugeLabelProd"
               [append]="gaugeAppendTextProd"
               [thresholds]="thresholdConfigProd"
    >
    </ngx-gauge>

    <ngx-gauge [type]="gaugeTypeUsr"
               [value]="gaugeValueUsr"
               [label]="gaugeLabelUsr"
               [append]="gaugeAppendTextUsr"
               [thresholds]="thresholdConfigUsr"
    >
    </ngx-gauge>    
  `,
  styles: [],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ]
})
export class DashboardComponent implements OnInit {

  public productos = [];
  public usuarios = [];

  gaugeTypeProd = '';
  gaugeValueProd = 0;
  gaugeLabelProd = '';
  gaugeAppendTextProd = '';
  thresholdConfigProd = {
    '15': {color: 'red'},
    '30': {color: 'orange'},
    '60': {color: 'green'}
  };

  gaugeTypeUsr = '';
  gaugeValueUsr = 0;
  gaugeLabelUsr = '';
  gaugeAppendTextUsr = '';
  thresholdConfigUsr = {
    '0': {color: 'white'},
  };


  constructor(
    private serviceProducto: ServiceProducto,
    private serviceUsuario: ServiceUsuario,

  ) {



  }

  async ngOnInit() {
    let responseService: any = await new Promise<any> (
      (exec) => this.serviceProducto.todos().subscribe(
        (data: any) => { exec(data); },
        (error: any) => { exec(error); },
        () => {}
      )

    );

    if (responseService.success) {
      this.productos = responseService.productos; // Object.keys(responseService.productos).map(i => responseService.productos[i] ) ;
    } else {
      this.productos = [];
    }

    responseService = await new Promise<any> (
      (exec) => this.serviceUsuario.todos().subscribe(
        (data: any) => { exec(data); },
        (error: any) => { exec(error); },
        () => {}
      )

    );

    if (responseService.success) {
      this.usuarios = responseService.usuarios; // Object.keys(responseService.productos).map(i => responseService.productos[i] ) ;
    } else {
      this.usuarios = [];
    }

    this.gaugeTypeProd = "full";
    this.gaugeValueProd = this.productos.length;
    this.gaugeLabelProd = "Productos en Inventario";
    this.gaugeAppendTextProd = "Variedades";

    this.gaugeTypeUsr = "arch";
    this.gaugeValueUsr = this.usuarios.length;
    this.gaugeLabelUsr = "Usuarios Registrados";
    this.gaugeAppendTextUsr = "Usuarios";


  }



}
