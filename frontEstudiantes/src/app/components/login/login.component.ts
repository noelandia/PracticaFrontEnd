import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ApiDbService } from '../../services/api-db.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logo = "../../../assets/acceso.png";
  password!: string;
  validationMessage!: string;

  constructor(private router: Router, private servicio_rest: ApiDbService){

  }

  formLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(5)])
  });

  ingresarLogin():void{
    this.router.navigateByUrl('/dashboard');
  }
}
