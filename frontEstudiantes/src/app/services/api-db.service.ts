import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../components/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class ApiDbService {

  private apiEstUrl = 'http://localhost:3000/estudiantes'; 

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.apiEstUrl);
  }

  guardarEstudiante(nuevo_Estudiante: Estudiante): Observable<Estudiante>{
    return this.http.post<Estudiante>(this.apiEstUrl, nuevo_Estudiante);
  }

  editarEstudiante(id: string, datos_nuevos: Estudiante): Observable<Estudiante>{
    return this.http.put<Estudiante>(`${this.apiEstUrl}/${id}`,datos_nuevos);
  }

  eliminarEstudiante(id: string): Observable<any>{
    return this.http.delete<any>(`${this.apiEstUrl}/${id}`);
  }

}
