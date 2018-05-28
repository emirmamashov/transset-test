// core
import { Injectable } from '@angular/core';

// config
import { NotifyConfig } from '../../config';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor() {
    this.init();
  }
  private init() {
    const notifies = Object.keys(NotifyConfig.msgTypes);
    if (!notifies || notifies.length < 1) {
      console.log('notifies is not have config');
      return;
    }

    notifies.forEach((key) => {
      $.notify.addStyle(NotifyConfig.msgTypes[key].styleName, {
        html:
        `<div>
          <div class="alert alert-${NotifyConfig.msgTypes[key].value}">
          <i class="fa fa-info" aria-hidden="true"></i>&nbsp;
          <span data-notify-text/>
          </div>
        </div>`
      });
    });
  }

  showMessage(text: string, styleName: string) {
    styleName = styleName || NotifyConfig.msgTypes.danger.styleName;
    if (!text) {
      console.error('text not valid!');
      return;
    }

    $.notify(text, {
      style: styleName
    });
  }
}
