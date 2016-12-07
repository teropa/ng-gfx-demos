import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimatedCanvasLogoComponent } from './animated-canvas-logo.component';
import { CanvasLogoComponent } from './canvas-logo.component';

const routes: Routes = [
  { path: 'canvas/animated', component: AnimatedCanvasLogoComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AnimatedCanvasLogoComponent,
    CanvasLogoComponent
  ],
  exports: [
    AnimatedCanvasLogoComponent
  ],
  providers: []
})
export class AnimatedCanvasLogoModule { }
