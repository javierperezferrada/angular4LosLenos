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


    const PARTIES = [
  { id: 1, title: "Main Event", description: "The biggest, most extravagant event in the last 10,000,000 years." },
  { id: 2, title: "Secondary Event", description: "The not as biggest, less extravagant event in the last 10,000,000 years." },
  { id: 3, title: "Another Event", description: "N/A" },
  { id: 4, title: "Another Event", description: "N/A" },
  { id: 5, title: "Another Event", description: "N/A" },
  { id: 6, title: "Another Event", description: "N/A" },
  { id: 7, title: "Another Event", description: "N/A" },
  { id: 8, title: "Another Event", description: "N/A" },
  { id: 9, title: "Another Event", description: "N/A" },
  { id: 10, title: "Another Event", description: "N/A" }
];

var chunk_size = 3;
const groups = PARTIES.map(function(e,i){
    return i%chunk_size===0 ? PARTIES.slice(i,i+chunk_size) : null;
})
.filter(x=>!!x)

console.log(groups);
  }

}
