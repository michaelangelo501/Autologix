import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient,
    private jwtHelper:JwtHelperService,) { 
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
    const authToken = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': `x-acces-token:${authToken}`
    });
    return this.http.get(`http://ecoserver.hopto.org:3000/integrantes`,{headers})
  }

  getUsuarios(){
    return this.http.get(`http://ecoserver.hopto.org:3000/usuarios`)
  }

}
