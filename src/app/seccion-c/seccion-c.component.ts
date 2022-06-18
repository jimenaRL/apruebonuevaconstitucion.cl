import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-c',
  templateUrl: './seccion-c.component.html',
  styleUrls: ['./seccion-c.component.css', '../app.component.css']
})
export class SeccionCComponent implements OnInit {
  markerSelected: any;
  constructor() { }

  ngOnInit(): void {
  }

  markerUpdated(marker:any){
    this.markerSelected = marker;
  }

}
