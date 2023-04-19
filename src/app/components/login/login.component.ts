import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inputValue:string="";

  user = {
    usuario: '',
    contrasena: '',
  }

  constructor (private authService:AuthService,
    private router:Router) {}

  ngOnInit(){}

  logIn(){
    console.log(this.user);
    this.authService.signIn(this.user).subscribe( (res:any) =>{
      console.log(res);
      localStorage.setItem('token', res.token)
      this.router.navigate(['integrantes'])
    },
    err =>{
      console.log(err);
    }
    )
  }

  borrarInput(){
    this.inputValue = '';
  }
}
