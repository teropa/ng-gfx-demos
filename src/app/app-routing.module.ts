import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimatedCanvasLogoComponent } from './animated-canvas-logo/animated-canvas-logo.component';
import { AnimatedLogoCssComponent } from './animated-logo-css/animated-logo-css.component';
import { AnimatedLogoNganimateComponent } from './animated-logo-nganimate/animated-logo-nganimate.component';
import { AnimatedLogoGsapComponent } from './animated-logo-gsap/animated-logo-gsap.component';
import { BasicCanvasLogoComponent } from './basic-canvas-logo/basic-canvas-logo.component';
import { BasicLogoComponent } from './basic-logo/basic-logo.component';
import { LogoWithBindingsComponent } from './logo-with-bindings/logo-with-bindings.component';

const routes: Routes = [
  { path: 'svg/basic', component: BasicLogoComponent },
  { path: 'svg/bindings', component: LogoWithBindingsComponent },
  { path: 'svg/css-animation', component: AnimatedLogoCssComponent },
  { path: 'svg/ng-animation', component: AnimatedLogoNganimateComponent },
  { path: 'svg/gsap-animation', component: AnimatedLogoGsapComponent },
  { path: 'canvas/basic', component: BasicCanvasLogoComponent },
  { path: 'canvas/animated', component: AnimatedCanvasLogoComponent},
  { path: '', redirectTo: 'svg/basic', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
