import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogoWithComponentsComponent } from './logo-with-components.component';
import { LogoLeftComponent } from './logo-left.component';
import { LogoRightComponent } from './logo-right.component';
import { LogoAComponent } from './logo-a.component';

const routes: Routes = [
  { path: 'svg/components', component: LogoWithComponentsComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LogoWithComponentsComponent,
    LogoLeftComponent,
    LogoRightComponent,
    LogoAComponent
  ],
  exports: [
    LogoWithComponentsComponent
  ],
  providers: []
})
export class LogoWithComponentsModule { }
