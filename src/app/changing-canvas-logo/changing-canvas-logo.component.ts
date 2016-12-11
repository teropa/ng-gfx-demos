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
    this.updateParticles();
  }

  ngOnDestroy() {
    if (this.isChanging()) {
      clearInterval(this.intervalId);
    }
  }

  isChanging() {
    return !!this.intervalId;
  }

  toggleChanging() {
    if (this.isChanging()) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    } else {
      this.intervalId = setInterval(() => this.updateParticles(), 100)
    }
  }


  private updateParticles() {
    this.particles = [];
    for (let i = 0 ; i < 50000 ; i++) {
      this.particles.push({
        x: Math.random() * 500,
        y: Math.random() * 500
      });
    }
  }
}
