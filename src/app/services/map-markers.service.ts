import { Injectable } from '@angular/core';
import markers from '../../assets/markers.json';

@Injectable({
  providedIn: 'root'
})
export class MapMarkersService {
  markers = markers;
  
  constructor() { }

  getMarkers(){
    return this.markers;
  }
}
