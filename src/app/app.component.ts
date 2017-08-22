import { Component, ViewChild, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  innerWidth: any;
  navIsFixed: boolean = false;
  @ViewChild('buttonNavbar') buttonNavbar: any;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 56) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }


  closeNav() {
    this.innerWidth = window.screen.width;
    if (this.innerWidth < 768) {
      this.buttonNavbar.nativeElement.click();
    }
  }
}
