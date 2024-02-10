import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ApiDbService } from '../../../services/api-db.service';
import { Estudiante } from '../dashboard.component';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [NavbarComponent,MatSelectModule,MatInputModule,MatFormFieldModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  
  formNuevo = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('',Validators.required),
    edad: new FormControl(17,[Validators.required, Validators.min(17)]),
    carrera: new FormControl('',Validators.required)
  });

  constructor(private router: Router, private servicio_rest: ApiDbService){

  }

  botonCancelar():void{
    this.router.navigateByUrl('/dashboard');
  }

  crearEstudiante():void{
    const datos: Estudiante = {
      nombre: this.formNuevo.value.nombre!,
      apellido: this.formNuevo.value.apellido!,
      edad: this.formNuevo.value.edad!,
      carrera: this.formNuevo.value.carrera!
    };

    this.servicio_rest.guardarEstudiante(datos).subscribe(estudiante => {
      alert("El Estudiante ha sido guardado correctamente!");
      this.router.navigateByUrl('/dashboard');
    });

  }
}
