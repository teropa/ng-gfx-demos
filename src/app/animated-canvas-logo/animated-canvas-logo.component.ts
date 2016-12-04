import { Component } from '@angular/core';
import { List, Range } from 'immutable';
import { Particle } from './particle';

@Component({
  selector: 'app-animated-canvas-logo',
  templateUrl: './animated-canvas-logo.component.html',
  styleUrls: ['./animated-canvas-logo.component.scss']
})
export class AnimatedCanvasLogoComponent {
  running = false;

  startStop() {
    this.running = !this.running;
  }

}
