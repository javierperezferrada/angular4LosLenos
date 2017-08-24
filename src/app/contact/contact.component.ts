import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormBuilder } from "@angular/forms";
import { ContactService } from "./contact.service";
import { NotificationsService } from "angular2-notifications";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LocalStorageService } from "ng2-webstorage";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../app-footer/app-footer.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public name: AbstractControl;
  public email: AbstractControl;
  public phone: AbstractControl;
  public message: AbstractControl;
  public options = {
    position: ["top", "right"],
    timeOut: 0,
    lastOnBottom: true,
  };

  constructor(private fb: FormBuilder, private contactService: ContactService,
              private notiService: NotificationsService,
              private modalService: NgbModal, private storage:LocalStorageService) { 
    this.storage.store('navIsFixed', true);
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
      if (res.status === 200) {
        this.notiService.success(
            'Mensaje enviado correctamente',
            'Gracias por comunicarse con nosotros',
            {
              timeOut: 6000,
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false,
              maxLength: 100
            }
          );
        this.contactForm.reset();
      }
    }, error => {
      console.log('error');
      console.log(error);
      this.notiService.error(
        'No se pudo enviar el mensaje',
        'Por favor intentelo nuevamente',
        {
          timeOut: 6000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 100
        }
      );
    });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }

  goGoogleMaps() {
    window.open('https://www.google.com/maps/place/Restaurant+Los+Le%C3%B1os/@-39.81329,-73.243038,18z/data=!4m5!3m4!1s0x0:0xd4ef7deaa1acfa7e!8m2!3d-39.813307!4d-73.243056?hl=es-419');
  }

  goCall() {
    window.open("tel:632231003");
  }

}
