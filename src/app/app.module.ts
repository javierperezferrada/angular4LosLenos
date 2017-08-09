import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    DetailModal,
    ProductDetailComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  entryComponents: [
    DetailModal
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
