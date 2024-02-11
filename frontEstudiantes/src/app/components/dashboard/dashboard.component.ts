import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { ApiDbService } from '../../services/api-db.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

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
  nombres_columnas: string[] = ['nombre', 'apellido', 'edad', 'carrera','editar','eliminar'];
  datos!: MatTableDataSource<Estudiante>;

  constructor(private servicio_rest: ApiDbService){  }

  ngOnInit(): void {
    this.servicio_rest.getEstudiantes().subscribe(estudiantes => {
      this.datos = new MatTableDataSource<Estudiante>(estudiantes);
    })
  }

  accion1(){

  }

  accion2(){

  }

}
