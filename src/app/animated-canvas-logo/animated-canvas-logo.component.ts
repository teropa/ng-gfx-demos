import { Component, OnInit, OnDestroy } from '@angular/core';
import { List, Range } from 'immutable';
import { Particle } from './particle';

@Component({
  selector: 'app-animated-canvas-logo',
  templateUrl: './animated-canvas-logo.component.html',
  styleUrls: ['./animated-canvas-logo.component.scss']
})
export class AnimatedCanvasLogoComponent implements OnInit, OnDestroy {
  particles = List<Particle>();
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => this.updateParticles(), 100)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
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
