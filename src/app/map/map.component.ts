import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { MapMarkersService } from "../services/map-markers.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {
  @Output() markerClicked:EventEmitter<Object> =new EventEmitter();
  constructor(private mapMarkersService:MapMarkersService) {}

  ngOnInit(): void {}

  markerClic(marker:any) {
   this.markerClicked.emit(marker);
  }

  mapOptions: google.maps.MapOptions = {
    center: { lat: -33.43807238117022, lng: -70.65308524700148 },
    zoom: 7,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  markers = this.mapMarkersService.getMarkers();
}
