// cores
import { Component, OnInit, OnDestroy } from '@angular/core';

// config
import { ApiConfig, NotifyConfig } from '../../config';

// models
import { Section, SectionField } from '../../models/section';

// services
import { MasterQueryService } from '../../services/master-query/master-query.service';
import { UnsubscribeService } from '../../services/unsubscribe/unsubscribe.service';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscribes = new Array<any>();
  sections = new Array<Section>();

  constructor(
    private masterQueryService: MasterQueryService,
    private unsubscribeService: UnsubscribeService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.getSections();
  }

  getSections() {
    this.subscribes.push(
      this.masterQueryService.get(ApiConfig.section.getAll.url).subscribe(
        (res: any) => {
          if (!res.success) {
            return this.notifyService.showMessage(res.msg || 'Что то пошло не так!', NotifyConfig.msgTypes.danger.styleName);
          }
          this.sections = res.data;
          if (this.sections.length > 0) {
            this.sections[0].isValid = true;
            this.sections[0].selected = true;
          }
        },
        (e) => {
          console.log(e);
          this.notifyService.showMessage('Что то пошло не так!', NotifyConfig.msgTypes.danger.styleName);
        }
      )
    );
  }

  send(section: Section) {
    this.subscribes.push(
      this.masterQueryService.post(ApiConfig.section.checkFields.url, section.fields).subscribe(
        (res: any) => {
          if (!res.success) {
            return this.notifyService.showMessage(res.msg || 'Что то пошло не так!', NotifyConfig.msgTypes.danger.styleName);
          }
          section.selected = false;
          section.isValid = true;
          let nextSection = this.sections[section.index+1];
          if (nextSection) {
            nextSection.selected = true;
          }
          this.notifyService.showMessage('Успешно!', NotifyConfig.msgTypes.success.styleName);
        },
        (e) => {
          console.log(e);
          this.notifyService.showMessage('Что то пошло не так!', NotifyConfig.msgTypes.danger.styleName);
        }
      )
    );
  }

  ngOnDestroy() {
    this.unsubscribeService.unsubscribings(this.subscribes);
  }
}
