import { Component, ViewChild, HostListener, Inject } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';
import { LoadingModule } from 'ngx-loading';
import { BaThemeSpinner } from "../services/baThemeSpinner.service";
import { BaImageLoaderService } from "../services/baImageLoader.service";
import { BaThemePreloader } from "../services/baThemePreloader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger('someCoolAnimation', [
      transition('* => fadeIn', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition('* => fadeOut', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ],
})
export class AppComponent {
  inHome: boolean = false;
  title = 'app';
  innerWidth: any;
  navIsFixed: boolean = true;
  @ViewChild('buttonNavbar') buttonNavbar: any;
  public loading = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              private localSt:LocalStorageService, private _spinner: BaThemeSpinner,
              private _imageLoader: BaImageLoaderService) { }

  ngOnInit () {
    this.localSt.observe('inHome')
      .subscribe((value) => {
        this.inHome = value;
      });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    /*if (this.inHome) {
      let number = this.document.body.scrollTop;
      if (number > 56) {
        this.navIsFixed = true;
      } else if (this.navIsFixed && number < 10) {
        this.navIsFixed = false;
      }
    } else {
      this.navIsFixed = true;
    }*/
  }


  closeNav() {
    this.innerWidth = window.screen.width;
    if (this.innerWidth < 768) {
      this.buttonNavbar.nativeElement.click();
    }
  }

  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load('assets/img/slide-1.jpg'));
    BaThemePreloader.registerLoader(this._imageLoader.load('assets/img/slide-2.jpg'));
    BaThemePreloader.registerLoader(this._imageLoader.load('assets/img/slide-3.jpg'));
  }
}
