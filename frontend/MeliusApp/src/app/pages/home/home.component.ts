import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-home',
  template: `
    
    <div class="clr-align-content-center">
      <div style="text-align: center">
        <h1>Binvenido a ModoInMelius</h1>
        <img src="../../../assets/images/logo/logo2.jpg" style="width: 500px" />
        <p>
          Ingrese en nuestro portal dando click en login.<br>
          O conozca algo mas de nosotros.
        </p>
      </div>
    </div>


  `,
  styles: [],
  providers: [
    Location,
    {provide: LocationStrategy, useClass: PathLocationStrategy},
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
