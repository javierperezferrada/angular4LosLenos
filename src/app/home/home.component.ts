import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('testElem') el:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
 
      this.recursiveCarousel(5000);

    
    
  }
  recursiveCarousel(time){
    setTimeout(()=>{
      this.el.nativeElement.click();
      this.recursiveCarousel(time);
    }, time);
  }

}
