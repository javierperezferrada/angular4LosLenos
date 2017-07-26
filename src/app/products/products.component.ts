import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductsService } from "./products.service";
import { DetailModal } from "./detail-modal.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  closeResult: string;
  @ViewChildren('sSection') sSections: QueryList<any>
  lastSelected: number = -1;
  selectedSection: number = -1;
  public sections: Array<any>;

  constructor(private _service: ProductsService,
              private modalService: NgbModal) { }

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

  showDetail(product) {
    const activeModal = this.modalService.open(DetailModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = product.name;
    activeModal.result.then(
      function onClose(result){
        if (result !== 'cancel') {
          ;
        } else {
          ;
        }
      }, function onDismiss(){ }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

