import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }
  
  goGoogleMaps() {
    window.open('https://www.google.com/maps/place/Restaurant+Los+Le%C3%B1os/@-39.81329,-73.243038,18z/data=!4m5!3m4!1s0x0:0xd4ef7deaa1acfa7e!8m2!3d-39.813307!4d-73.243056?hl=es-419');
  }

  goCall() {
    window.open("tel:632231003");
  }

}
