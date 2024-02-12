import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { ApiDbService } from '../../services/api-db.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

export interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,MatTableModule,MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
  nombres_columnas: string[] = ['id','nombre', 'apellido', 'edad', 'carrera','editar','eliminar'];
  datos!: MatTableDataSource<Estudiante>;

  constructor(private servicio_rest: ApiDbService, private router: Router){  }

  ngOnInit(): void {
    this.servicio_rest.getEstudiantes().subscribe(estudiantes => {
      this.datos = new MatTableDataSource<Estudiante>(estudiantes);
    })
  }

  botonEditar(idEst:string){
    this.router.navigateByUrl('/editar/'+idEst);
  }

  botonEliminar(idEst: string){
    this.servicio_rest.eliminarEstudiante(idEst).subscribe((result) => {
      this.ngOnInit();     
    });    
  }

}
