import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app-footer/app-footer.component.css']
})
export class HomeComponent implements OnInit {
  live: boolean;
  @ViewChild('testElem') el: ElementRef;

  constructor(private storage:LocalStorageService) {}

  ngOnInit() {
    this.live = true;
    this.storage.store('inHome', true);
    this.storage.store('navIsFixed', false);
  }

  ngAfterViewInit() {
    this.recursiveCarousel(5000);
  }

  ngOnDestroy() {
    this.live = false;
    this.storage.store('inHome', false);
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
