import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { IntegrantesComponent } from './components/integrantes/integrantes.component';

//Modules
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

//Providers
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    IntegrantesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:JWT_OPTIONS, useValue:JWT_OPTIONS},
    JwtHelperService,
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
