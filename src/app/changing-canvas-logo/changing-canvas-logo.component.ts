import { Component, OnInit, OnDestroy } from '@angular/core';
import { Particle } from './particle';

@Component({
  selector: 'app-changing-canvas-logo',
  templateUrl: './changing-canvas-logo.component.html',
  styleUrls: ['./changing-canvas-logo.component.scss']
})
export class ChangingCanvasLogoComponent implements OnInit, OnDestroy {
  particles: Particle[] = []
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => this.updateParticles(), 100)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateParticles() {
    this.particles = [];
    for (let i = 0 ; i < 50000 ; i++) {
      this.particles.push({
        x: Math.random() * 250,
        y: Math.random() * 250
      });
    }
  }
}
