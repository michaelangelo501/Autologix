import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req:any, next:any){
    const token = localStorage.getItem('token');
    const tokenHeaders = req.clone({
      setHeaders:{
        Headers: 'x-acces-token:'+`${token}`
      }
    });
    return next.handle(tokenHeaders)
  }
  constructor() { }
}
