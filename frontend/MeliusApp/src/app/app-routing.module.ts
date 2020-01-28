import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {PagesComponent} from './pages/pages.component';

const routes: Routes = [
  { path: '',   redirectTo: '/pages/home', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: './auth/login/login.module#LoginModule'
      }
    ]
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'productos',
        loadChildren: './pages/productos/productos.module#ProductosModule'
      },
      {
        path: 'usuarios',
        loadChildren: './pages/usuarios/usuarios.module#UsuariosModule'
      }

    ]
  },
  {  path: '**', redirectTo: 'home' },
];

// const routes: Routes = [
//   { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
//   { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
//   { path: '', redirectTo: 'pages', pathMatch: 'full' },
//   { path: '**', redirectTo: 'pages' },
//
// ];


const config: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
  scrollPositionRestoration:  'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  declarations: [
    AuthComponent,
    PagesComponent,
  ],
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
