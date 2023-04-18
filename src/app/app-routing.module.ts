import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'navigation'},
  {path:'integrantes', component:IntegrantesComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'usuarios',component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
