import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AnimatedCanvasLogoComponent } from './animated-canvas-logo.component';
import { CanvasLogoComponent } from './canvas-logo.component';


@NgModule({
  declarations: [
    AnimatedCanvasLogoComponent,
    CanvasLogoComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AnimatedCanvasLogoComponent
  ],
  providers: []
})
export class AnimatedCanvasLogoModule { }
