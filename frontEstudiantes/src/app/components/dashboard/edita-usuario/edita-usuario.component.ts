import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDbService } from '../../../services/api-db.service';
import { Estudiante } from '../dashboard.component';

@Component({
  selector: 'app-edita-usuario',
  standalone: true,
  imports: [NavbarComponent, MatSelectModule,MatInputModule,MatFormFieldModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './edita-usuario.component.html',
  styleUrl: './edita-usuario.component.css'
})
export class EditaUsuarioComponent {
  
  constructor(private router: Router, private actRouter: ActivatedRoute, private servicio_rest: ApiDbService){ }

  formEdita = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    edad: new FormControl(),
    carrera: new FormControl()
  });

  ngOnInit(): void {
    this.servicio_rest.getEstudianteById(this.actRouter.snapshot.params['id']).subscribe((result: any)=>{
      this.formEdita = new FormGroup({
        nombre: new FormControl(result['nombre'], Validators.required),
        apellido: new FormControl(result['apellido'],Validators.required),
        edad: new FormControl(result['edad'],[Validators.required, Validators.min(17)]),
        carrera: new FormControl(result['carrera'],Validators.required)
      });
    });
  }

  botonCancelar():void{
    this.router.navigateByUrl('/dashboard');
  }

  actualizarEstudiante(){
    this.servicio_rest.editarEstudiante(this.actRouter.snapshot.params['id'],this.formEdita.value).subscribe((result)=>{
      alert("El Estudiante ha sido actualizado correctamente!");
      this.router.navigateByUrl('/dashboard');
    });
  }
}
