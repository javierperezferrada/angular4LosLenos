import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = '¡Visitanos y sorprendete!';
  lat: number = -39.8132897;
  lng: number = -73.2430380;
  zoom: number = 18;
  label: String = 'Los Leños Valdivia'
  disableDefaultUI: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  clickedMarker(content) {
    this.modalService.open(content).result.then((result) => {
     }, (reason) => {
    });
  }

  goGoogleMaps() {
    window.open('https://www.google.com/maps/place/Restaurant+Los+Le%C3%B1os/@-39.81329,-73.243038,18z/data=!4m5!3m4!1s0x0:0xd4ef7deaa1acfa7e!8m2!3d-39.813307!4d-73.243056?hl=es-419');
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

}
