import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios:any = [];

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.getUsuarios().subscribe(
      res => console.log(res),
      error => console.log(error)
    )
}
}
