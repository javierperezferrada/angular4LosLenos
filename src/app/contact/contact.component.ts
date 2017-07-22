import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormBuilder } from "@angular/forms";
import { ContactService } from "./contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public phone: AbstractControl;
  public message: AbstractControl;

  constructor(private fb: FormBuilder, private contactService: ContactService) { 
    this.createContactForm();
    this.name = this.contactForm.controls['name'];
    this.email = this.contactForm.controls['email'];
    this.phone = this.contactForm.controls['phone'];
    this.message = this.contactForm.controls['message'];
  }

  ngOnInit() {
  }

  createContactForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      message: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    });
  }

  onSubmit(values) {
    this.contactService.saveContact(values).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('error');
      console.log(error);
      /*
      this.notiService.error(
        'No se pudo guardar la información',
        'Por favor verifique que los datos ingresados son correctos',
        {
          timeOut: 6000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 100
        }
      );*/
    });
  }

}
