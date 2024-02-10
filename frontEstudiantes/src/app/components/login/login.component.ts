import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logo = "../../../assets/acceso.png";

  constructor(private router: Router){

  }

  formLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  ingresarLogin():void{
    //Código para verificar usuario y password
    this.router.navigateByUrl('/dashboard');
  }
}
