import { Component, EventEmitter, OnInit, Output, OnChanges, ViewChild, ElementRef} from '@angular/core';
import { MapMarkersService } from '../services/map-markers.service';

@Component({
  selector: 'app-seccion-c',
  templateUrl: './seccion-c.component.html',
  styleUrls: ['./seccion-c.component.css', '../app.component.css']
})
export class SeccionCComponent implements OnInit {
  markerSelected: any;
  markers: any;
  center:any = { lat: -26, lng: -70.65308524700148 };

  constructor(private mapMarkersService:MapMarkersService) { }

  ngOnInit(): void {
    let mapOptions: google.maps.MapOptions = {
      center: { lat: -33.44187785424067, lng: -70.64471797424537 },
      zoom: 4,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    };
    this.center = mapOptions;
    this.markers = this.mapMarkersService.getMarkers();
  }

  markerUpdated(marker:any){
    this.markerSelected = marker;
  }

  onSearchInputChanged(eventInfo:any){
    if(eventInfo === ""){
      let mapOptions: google.maps.MapOptions = {
        center: { lat: -33.44187785424067, lng: -70.64471797424537 },
        zoom: 4,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      };
      this.center = mapOptions;
    }
  }

  ngOnChanges(){
    console.log('onchanges:',this.center);
  }

  onSearchSelectedItem(eventInfo:any){
    let mapOptions: google.maps.MapOptions = {
      center: { lat: -33.44187785424067, lng: -70.64471797424537 },
      zoom: 14,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    };
    this.markerSelected = eventInfo;
    mapOptions.center = eventInfo.position;
    this.center = mapOptions;
  }

  onSearchInputCleared(eventInfo:any){
    let mapOptions: google.maps.MapOptions = {
      center: { lat: -33.44187785424067, lng: -70.64471797424537 },
      zoom: 4,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    };
    this.center = mapOptions;
  }
}
