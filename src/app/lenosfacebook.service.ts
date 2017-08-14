import { Injectable } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Injectable()
export class LenosfacebookService {

  constructor(private fb: FacebookService) { 
    let initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };
 
    fb.init(initParams);
  }

  share(url: string) {
    let params: UIParams = {
      href: 'https://github.com/zyra/ngx-facebook',
      method: 'share'
    };
    this.fb.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  
  }
}
