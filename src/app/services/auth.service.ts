import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  header = new Headers();

  constructor(private http:HttpClient,
    private jwtHelper:JwtHelperService, 
    private tokenInterceptor:TokenInterceptorService) { 

      this.header.append("Content-Type","application/json");
      this.header.append("Authorization",`x-acces-token:${localStorage.getItem('token')}`);
    }

  signIn(user:any){
    return this.http.get(`http://ecoserver.hopto.org:3000/usuarios/${user.usuario}/${user.contrasena}`,user)
  }

  isAuth():boolean{
    const token = localStorage.getItem('token')
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  getIntegrantes(){
    return this.http.get(`http://ecoserver.hopto.org:3000/integrantes`)
  }

  getUsuarios(){
    return this.http.get(`http://ecoserver.hopto.org:3000/usuarios`)
  }

}
