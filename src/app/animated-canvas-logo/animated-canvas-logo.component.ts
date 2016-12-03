import { Component } from '@angular/core';
import { List, Range } from 'immutable';
import { Particle } from './particle';

@Component({
  selector: 'app-animated-canvas-logo',
  templateUrl: './animated-canvas-logo.component.html',
  styleUrls: ['./animated-canvas-logo.component.scss']
})
export class AnimatedCanvasLogoComponent {
  particles = List<Particle>();
  private intervalId: any;

  startStop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    } else {
      this.intervalId = setInterval(() => this.updateParticles(), 100)
    }
  }

  private updateParticles() {
    const createdAt = Date.now();
    if (this.particles.isEmpty()) {
      this.particles = <List<Particle>>this.particles.concat(Range(0, 30).map(() => ({
        x: Math.random() * 250,
        y: Math.random() * 250,
        createdAt
      })));
    } else {
    this.particles = <List<Particle>>this.particles
      .push({
        x: Math.random() * 250,
        y: Math.random() * 250,
        createdAt
      })
      .rest();
    }
  }
}
