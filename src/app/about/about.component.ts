import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from "ng2-webstorage";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../app-footer/app-footer.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private storage:LocalStorageService) {
    this.storage.store('navIsFixed', true);
  }

  ngOnInit() {
  }

}
