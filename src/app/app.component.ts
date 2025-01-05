import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, HttpResponse, } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatDialog } from '@angular/material/dialog';
import { MapComponent } from './components/map/map.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule,
    HttpClientModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Food App';
  loader = true;
  ngOnInit(): void {
    this.getFromLocalStorage()
  }

  constructor(public dialog: MatDialog) { }

  getFromLocalStorage(): any {
    const value = localStorage.getItem('location');
    if(value==null){
      this.openDialog()
    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(MapComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

