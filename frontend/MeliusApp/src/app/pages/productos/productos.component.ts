import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

/* IMPORTAR SERVICIOS */
import { ServiceProducto} from '../../core/services/service.producto';


@Component({
  selector: 'app-productos',
  template: `
    <div>
      <h2>Productos</h2>
      <clr-datagrid [clrDgLoading]="isLoading">
        <clr-dg-column [clrDgField]="'CIdProducto'">Producto ID</clr-dg-column>
        <clr-dg-column [clrDgField]="'CNomProducto'">Descripcion</clr-dg-column>
        <clr-dg-column [clrDgField]="'NFlPrecio'">Precio $USD</clr-dg-column>
        <clr-dg-column [clrDgField]="'NIntCantidad'">Cantidad</clr-dg-column>
        <clr-dg-column [clrDgField]="'NFlTotal'">Total $USD</clr-dg-column>

        <clr-dg-placeholder>Test placeholder here</clr-dg-placeholder>

        <clr-dg-row *clrDgItems="let item of productos">
          <clr-dg-cell>{{item.CIdProducto}}</clr-dg-cell>
          <clr-dg-cell>{{item.CNomProducto}}</clr-dg-cell>
          <clr-dg-cell>{{item.NFlPrecio | number}}</clr-dg-cell>
          <clr-dg-cell>{{item.NIntCantidad | number}}</clr-dg-cell>
          <clr-dg-cell>{{item.NFlTotal | number}}</clr-dg-cell>
        </clr-dg-row>

        <clr-dg-footer>
          <clr-dg-pagination #pagination [clrDgPageSize]="10">
            <clr-dg-page-size [clrPageSizeOptions]="[10,20,50,100]">Productos por pagina</clr-dg-page-size>
            {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}
            of {{pagination.totalItems}} productos
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
export class ProductosComponent implements OnInit {

  public productos = [];
  public page;
  public pageSize;
  public collectionSize;
  isLoading = true;
  selected: any;

  constructor(
    private serviceProducto: ServiceProducto,

  ) { }

  async ngOnInit() {

    const responseService: any = await new Promise<any> (
      (exec) => this.serviceProducto.todos().subscribe(
        (data: any) => { exec(data); },
        (error: any) => { exec(error); },
        () => {}
      )

    );

    if (responseService.success) {
      this.productos = responseService.productos;
      this.page = 1;
      this.pageSize = 5;
      this.collectionSize = this.productos.length;
      this.isLoading = false;
      this.selected = this.productos[0];

    } else {
      this.productos = [];
    }


  }

}
