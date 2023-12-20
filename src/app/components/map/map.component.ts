import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MapsKey } from 'src/app/shared/models/MapsKey';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  
})

export class MapComponent implements OnInit {

  adressToShow: string = '';

  constructor() {
    
  }

  data: MapsKey[] = [
    { name: 'Volta Redonda', latLng: { lat: -22.5255, lng: -44.1052 }, id: 1 },
    { name: 'Barra Mansa', latLng: { lat: -22.5457, lng: -44.1687 }, id: 2 },
    { name: 'Resende', latLng: { lat: -22.4679, lng: -44.4512 }, id: 3 },
    { name: 'Angra dos Reis', latLng: { lat: -23.0067, lng: -44.3186 }, id: 4 },
  ];

  ngOnInit(): void {
    this.addMarker();
  }

  center: google.maps.LatLngLiteral = {
    lat: -22.710428328133098,
    lng: -44.227480190973395,
  };
  zoom = 9.5;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker() {
    this.markerPositions = this.data.map(item => item.latLng);
  }

  addressMarker(event: google.maps.MapMouseEvent) {
    const tolerance = 0.03; // Ajuste conforme necessário
    const clickedPosition = event.latLng?.toJSON();

    if (clickedPosition) {
      for (let i = 0; i < this.data.length; i++) {
        const markerPosition = this.data[i];
        const latDiff = Math.abs(markerPosition.latLng.lat - clickedPosition.lat);
        const lngDiff = Math.abs(markerPosition.latLng.lng - clickedPosition.lng);

        if (latDiff < tolerance && lngDiff < tolerance) {
          this.adressToShow = markerPosition.name;
          return;
        }
      }
    }

    /* alert('Nenhum item correspondente encontrado.'); */
  }
  
}
