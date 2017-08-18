import { Component, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  innerWidth: any;
  scrollPage: boolean = false;
  @ViewChild('buttonNavbar') buttonNavbar: any;
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.scrollPage = true;
  }

  ngOnInit() {
    this.scrollPage = false;
  }

  ngOnDestroy() {
    this.scrollPage = false;
  }


  closeNav() {
    this.innerWidth = window.screen.width;
    if (this.innerWidth < 768) {
      this.buttonNavbar.nativeElement.click();
    }
  }
}
