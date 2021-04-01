import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Incident} from '../model/Incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentHttpService {
  private apiRoot = 'http://localhost:8080/learn/api/incidents';


  constructor(private http: HttpClient) {
  }

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.apiRoot);
  }

  getIncident(id: number): Observable<Incident> {
    return this.http.get<Incident>(`${this.apiRoot}/${id}`);
  }

  addIncident(formValues: Incident): Observable<Incident> {
    return this.http.post<Incident>(this.apiRoot, formValues);
  }

  updateIncident(id: number, update: boolean): Observable<Incident> {
    return this.http.put<Incident>(this.apiRoot, update);
  }

  deleteIncident(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.apiRoot}/${id}`);
  }
}
