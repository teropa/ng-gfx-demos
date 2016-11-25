import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChangingCanvasLogoComponent } from './changing-canvas-logo.component';
import { CanvasLogoComponent } from './canvas-logo.component';


@NgModule({
  declarations: [
    ChangingCanvasLogoComponent,
    CanvasLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ChangingCanvasLogoComponent
  ],
  providers: []
})
export class ChangingCanvasLogoModule { }
