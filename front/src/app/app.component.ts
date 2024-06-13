import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {Log} from './models/log';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/log.service';
// import {DataService} from './services/log.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
    // ,
    // MainPageComponent
  ],
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  logArray: Log[]=[
    {
        "id": 1,
        "user": "UsuarioPrueba",
        "fechaHora": "2024-06-13T10:30:00Z",
        "tipoAcceso": "exitoso"
    },
    {
        "id": 2,
        "user": "UsuarioPrueba2",
        "fechaHora": "2024-06-13T11:00:00Z",
        "tipoAcceso": "denegado"
    }
];
  selectedLog: Log = new Log();


  addDoc() {
    this.selectedLog.id = this.logArray.length + 1;
    this.logArray.push(this.selectedLog);
    this.selectedLog = new Log();
  }

  // constructor(private dataService: DataService) {
  //   this.logArray = this.dataService.fetchAllLogs();
  // }
}


