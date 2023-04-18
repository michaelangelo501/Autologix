import { Component, OnInit } from '@angular/core';
import { Integrantes } from 'src/app/models/Integrantes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  integrantes:any = [];

  constructor(private authService:AuthService){}

  ngOnInit(): void {
      this.authService.getIntegrantes().subscribe(
        res => console.log(res),
        error => console.log(error)
      )
  }

}
