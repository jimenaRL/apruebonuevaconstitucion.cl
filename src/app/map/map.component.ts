import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from "@angular/core";
import { MapMarkersService } from "../services/map-markers.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class MapComponent implements OnInit {
  @ViewChild("googleMap") googleMap: any;
  @Output() markerClicked:EventEmitter<Object> =new EventEmitter();
  @Input() mapOptions: google.maps.MapOptions = {
    center: { lat: -33.44187785424067, lng: -70.64471797424537 },
    zoom: 4,
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };
  constructor(private mapMarkersService:MapMarkersService) {}

  ngOnInit(): void {}

  markerClic(marker:any) {
   this.markerClicked.emit(marker);
  }

  markers = this.mapMarkersService.getMarkers();
}
