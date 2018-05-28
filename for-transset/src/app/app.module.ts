// cores
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// sevices
import { HandleErrorService } from './services/handle-error/handle-error.service';
import { MasterQueryService } from './services/master-query/master-query.service';
import { UnsubscribeService } from './services/unsubscribe/unsubscribe.service';
import { NotifyService } from './services/notify/notify.service';

// routing
import { AppRoutingModule } from './app.routing';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InputComponent } from './components/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    HandleErrorService,
    MasterQueryService,
    UnsubscribeService,
    NotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
