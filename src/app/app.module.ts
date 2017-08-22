import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {GoTopButtonModule} from 'ng2-go-top-button';

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { routes } from "./app.router";
import { ContactService } from "./contact/contact.service";
import { DetailModal } from "./products/detail-modal.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';
import { FacebookModule } from 'ngx-facebook';
import {Ng2Webstorage} from 'ng2-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    DetailModal,
    ProductDetailComponent,
    AppFooterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng2Webstorage,
    SimpleNotificationsModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvy8uj4GfJi_E3zkdVAZ6x4iHivDIHvIg'
    }),
    FacebookModule.forRoot(),
    GoTopButtonModule
  ],
  entryComponents: [
    DetailModal
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ContactService],
  bootstrap: [AppComponent],
  exports: [GoTopButtonModule]
})
export class AppModule { }

  