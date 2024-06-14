// src/app/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/data'; // URL del endpoint

  constructor(private http: HttpClient) { }

  fetchAllLogs(): Observable<Log[]> {
    return this.http.get<Log[]>(this.apiUrl);
  }

  addLog(log: Log): Observable<Log> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Log>(this.apiUrl, log, { headers });
  }
}
