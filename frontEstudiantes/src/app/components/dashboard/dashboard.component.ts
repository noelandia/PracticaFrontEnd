import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import { ApiDbService } from '../../services/api-db.service';
import { MatTableDataSource } from '@angular/material/table';

export interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
  nombres_columnas: string[] = ['nombre', 'apellido', 'edad', 'carrera'];
  datos!: MatTableDataSource<Estudiante>;

  constructor(private servicio_rest: ApiDbService){  }

  ngOnInit(): void {
    this.servicio_rest.getEstudiantes().subscribe(estudiantes => {
      this.datos = new MatTableDataSource<Estudiante>(estudiantes);
    })
  }

}
