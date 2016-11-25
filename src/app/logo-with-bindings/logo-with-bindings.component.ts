import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-with-bindings',
  templateUrl: './logo-with-bindings.component.html',
  styleUrls: ['../logo.scss', './logo-with-bindings.component.scss']
})
export class LogoWithBindingsComponent {
  rotation = 0;

  getAPath() {
    return `M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
      L125,52.1z M142,135.4H108l17-40.9L142,135.4z`;
  }

  onMouseMove(evt: MouseEvent) {
    const x = evt.offsetX;
    const y = evt.offsetY;
    this.rotation = Math.atan2(y - 150, x - 150) + Math.PI / 2;
  }

  getRotation() {
    return `rotate(${this.rotation}rad)`;
  }

}
