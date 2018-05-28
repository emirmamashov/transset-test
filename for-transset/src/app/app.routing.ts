// core
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { HomeComponent } from './pages/home/home.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
