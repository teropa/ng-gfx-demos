import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicLogoComponent } from './basic-logo/basic-logo.component';
import { LogoWithBindingsComponent } from './logo-with-bindings/logo-with-bindings.component';

import { LogoWithComponentsModule } from './logo-with-components/logo-with-components.module';
import { AnimatedLogoCssComponent } from './animated-logo-css/animated-logo-css.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLogoComponent,
    LogoWithBindingsComponent,
    AnimatedLogoCssComponent
  ],
  imports: [
    BrowserModule,
    LogoWithComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
