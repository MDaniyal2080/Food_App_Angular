import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

declare const L: any
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule,FormsModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  colorControl = new FormControl('primary' as ThemePalette);
  location: FormGroup;
  localstorage:any;
loc:string='';

  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported')
    }
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.latitude}, lon: ${position.coords.longitude} `)
      var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 15);

      var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
      
      var circle = L.circle([position.coords.latitude, position.coords.longitude], {
        color: '#007BFD',
        fillColor: '#007BFD',
        fillOpacity: 0.2,
        radius: 100
      }).addTo(map);


      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      marker;
      circle; 
  })
}

submit(){
 
  const trimmedValue = this.loc.trim();
  if (trimmedValue !== "") {
    localStorage.setItem('location', JSON.stringify(trimmedValue));
    console.log(trimmedValue);
    this.closeDialog();
  } else {
    alert('Please fill the location');
  }

}

closeDialog(): void {
  this.dialog.closeAll();
}

}
