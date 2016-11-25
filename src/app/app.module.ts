import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicLogoComponent } from './basic-logo/basic-logo.component';
import { LogoWithBindingsComponent } from './logo-with-bindings/logo-with-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicLogoComponent,
    LogoWithBindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
