import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {Log} from './models/log';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];
  selectedLog: Log = new Log();

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('http://localhost:3000/data')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }

  addDoc() {
    console.log('Posting document:', this.selectedLog);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post('http://localhost:3000/data', this.selectedLog, { headers }).subscribe(
      (res: any) => {
        console.log('Document posted successfully:', res);
        this.fetchData(); // Refresh data after successful post
        this.selectedLog = new Log(); // Reset selectedLog
      },
      (error: any) => {
        console.error('Error posting document:', error);
      }
    );
  }

}
