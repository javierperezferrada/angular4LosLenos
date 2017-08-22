import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app-footer/app-footer.component.css']
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

  sharePage() {
    window.open('https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.xn--losleosvaldivia-2qb.cl%2F%23%2Finicio','ventanacompartir', 'toolbar=0, status=0, width=650, height=450');
  }

}
