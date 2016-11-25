import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LogoWithComponentsComponent } from './logo-with-components.component';
import { LogoLeftComponent } from './logo-left.component';
import { LogoRightComponent } from './logo-right.component';
import { LogoAComponent } from './logo-a.component';

@NgModule({
  declarations: [
    LogoWithComponentsComponent,
    LogoLeftComponent,
    LogoRightComponent,
    LogoAComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    LogoWithComponentsComponent
  ],
  providers: []
})
export class LogoWithComponentsModule { }
