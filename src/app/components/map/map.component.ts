import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  
})

export class MapComponent implements OnInit {

  constructor() { }

  data = [
    { lat: -22.525510760216118, lng: -44.10521814161848 },
    { lat: -22.46788737233491, lng:  -44.45120000467123 },
    { lat: -22.545778640590154,  lng: -44.168689500026765 },
    { lat: -23.006672872636145, lng: -44.31861543076403 },
  ];
  ngOnInit(): void {
    this.addMarker(); 
  }
  center: google.maps.LatLngLiteral = { lat: -22.710428328133098,  lng: -44.227480190973395 };
  zoom = 9.5;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker() {
    this.data.forEach(element => {
      this.markerPositions.push(element);
    });
  }


}

