import { Component, OnInit } from '@angular/core';
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  public sections: Array<any>;

  constructor(private _service: ProductsService) { }

  ngOnInit() {
    this.sections = this._service.getSections();
    this.sections.forEach(element => {
      element.principalProducts = element.products.slice(0,3);
      element.otherProducts = element.products.slice(3,);
    });
  }
}

