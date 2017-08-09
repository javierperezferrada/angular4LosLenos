import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ProductsService } from "./products.service";
import { DetailModal } from "./detail-modal.component";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";

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
              private modalService: NgbModal,
              private router: Router) { }

  ngOnInit() {
    this.sections = this._service.getSections();
    this.sections.forEach(element => {
      element.principalProducts = element.products.slice(0,5);
      element.otherProducts = element.products.slice(5,);
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

  showDetail(product, section) {
    //this.router.navigateByUrl('/productos/detalle');
    // Detalle de producto mostrado en una Modal
    const activeModal = this.modalService.open(DetailModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = product.name;
    activeModal.componentInstance.data = product;
    activeModal.componentInstance.section = section;
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

