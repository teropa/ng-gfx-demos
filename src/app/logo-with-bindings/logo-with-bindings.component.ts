import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-with-bindings',
  templateUrl: './logo-with-bindings.component.html',
  styleUrls: ['../logo.scss', './logo-with-bindings.component.scss']
})
export class LogoWithBindingsComponent {
  circle = [0, 0];

  setCircleLocation(evt: MouseEvent) {
    this.circle = [evt.offsetX, evt.offsetY];
  }

}
