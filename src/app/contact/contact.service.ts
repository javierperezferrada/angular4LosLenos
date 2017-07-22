import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  saveContact(values) {
    return this.http.post('api/v0/contact.php', JSON.stringify(values)).map((response: Response) => response);
  }
}