import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  live: boolean;
  @ViewChild('testElem') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.live = true;
  }

  ngAfterViewInit() {
    this.recursiveCarousel(5000);
  }

  ngOnDestroy() {
    this.live = false;
  }
  
  recursiveCarousel(time){
    setTimeout(()=>{
      if (this.live) {
        this.el.nativeElement.click();
        this.recursiveCarousel(time);
      }
    }, time);
  }

}
