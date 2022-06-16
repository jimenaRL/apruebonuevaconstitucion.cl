import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mapOptions: google.maps.MapOptions = {
     center: { lat: -33.43807238117022, lng: -70.65308524700148 },
     zoom : 7,
     zoomControl: false,
     mapTypeControl: false,
     streetViewControl: false,
     fullscreenControl: false
  }
  marker = {
     position: { lat: 38.9987208, lng: -77.2538699 },
     title: "marker"
  }
  marker0 = {
     position: { lat: -33.43807238117022, lng: -70.65308524700148 },
     title: "marker0"
  }

  marker1 = { position: { lat: -38.71480108400699, lng: -72.6525197807135 }, title: "marker1"};
  marker2 = { position: { lat: -33.50606140039984, lng: -70.76060242845375 }, title: "marker2"};
  marker3 = { position: { lat: -33.03650580374358, lng: -71.63032691124623 }, title: "marker3"};


  markers = [this.marker0, this.marker1, this.marker2, this.marker3];
}
