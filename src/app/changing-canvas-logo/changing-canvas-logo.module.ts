import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangingCanvasLogoComponent } from './changing-canvas-logo.component';
import { CanvasLogoComponent } from './canvas-logo.component';

const routes: Routes = [
  { path: 'canvas/changes', component: ChangingCanvasLogoComponent}
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ChangingCanvasLogoComponent,
    CanvasLogoComponent
  ],
  exports: [
    ChangingCanvasLogoComponent
  ],
  providers: []
})
export class ChangingCanvasLogoModule { }
