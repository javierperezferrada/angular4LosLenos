import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import 'style-loader!./provider-modal.scss';


@Component({
  selector: 'detail-modal',
  templateUrl: './detail-modal.html',
  styleUrls:['../product-detail/product-detail.component.css']
})

export class DetailModal implements OnInit {

  public amountForm: FormGroup;
  public amount: AbstractControl;
  modalHeader: string;
  data: any;
  section: any;

  constructor(private activeModal: NgbActiveModal,
              private fb: FormBuilder) {
    this.createForm();
    this.amount = this.amountForm.controls['amount'];
  }

  ngOnInit() {
  }

  public onSubmit(values): void {
    if (this.amountForm.valid) {
        this.closeModal(values.amount);
      }
  }
  
  closeModal(name: string) {
    this.activeModal.close(name);
  }
  
  cancelModal() {
    this.activeModal.close('cancel');
  }
  
  createForm() {
    this.amountForm = this.fb.group({
      amount: ['', Validators.compose([Validators.required])],
    });
  }
}
