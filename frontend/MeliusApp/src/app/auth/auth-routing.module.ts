import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthComponent} from './auth.component';
// import { LoginComponent} from './login/login.component';


// {path: 'login', loadChildren: 'src/app/auth/login/login.module#LoginModule'},

// const routes: Routes = [
//   {
//     path: '',
//     component: AuthComponent,
//     children: [
//       // {path: 'login', component: LoginComponent},
//       {path: 'login', loadChildren: 'src/app/auth/login/login.module#LoginModule'},
//     ],
//   },
// ];

const routes: Routes = [];

@NgModule({
  // declarations: [AuthComponent, LoginComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
