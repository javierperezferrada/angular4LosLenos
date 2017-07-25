import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  @ViewChildren('sSection') sSections: QueryList<any>
  lastSelected: number = -1;
  selectedSection: number = -1;
  public sections: Array<any>;

  constructor(private _service: ProductsService) { }

  ngOnInit() {
    this.sections = this._service.getSections();
    this.sections.forEach(element => {
      element.principalProducts = element.products.slice(0,3);
      element.otherProducts = element.products.slice(3,);
    });
  }

  ngAfterViewInit() {
    
  }

  seeMore(id) {
    this.lastSelected = this.selectedSection;
    if (this.selectedSection === id) {
      this.selectedSection = -1;
      this.lastSelected = -1;
    } else {
      this.selectedSection = id;
      if (this.lastSelected !== -1) {
        this.sSections.forEach(section => {
          if (+section.nativeElement.id === this.lastSelected) {
            section.nativeElement.click();
          }
        });
        this.lastSelected = id;
      }
    }
  }
}

