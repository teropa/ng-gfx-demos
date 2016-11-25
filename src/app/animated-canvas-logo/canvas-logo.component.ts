import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { List } from 'immutable';
import { Particle } from './particle';

const MAX_AGE = 3000;

@Component({
  selector: 'app-canvas-logo',
  templateUrl: './canvas-logo.component.html',
  styleUrls: ['./canvas-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasLogoComponent implements OnInit, OnDestroy {
  @Input() particles: List<Particle>;
  @ViewChild('canvas') canvasRef: ElementRef;
  private alive: boolean;

  constructor() { }

  ngOnInit() {
    this.alive = true;
    this.paint();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  private paint() {
    if (!this.alive) {
      return;
    }
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    ctx.clearRect(0, 0, this.scale(250), this.scale(250));
    ctx.beginPath();
    ctx.moveTo(this.scale(125), this.scale(30));
    ctx.lineTo(this.scale(31.9), this.scale(63.2));
    ctx.lineTo(this.scale(46.1), this.scale(186.3));
    ctx.lineTo(this.scale(125), this.scale(230));
    ctx.lineTo(this.scale(203.9), this.scale(186.3));
    ctx.lineTo(this.scale(218.1), this.scale(63.2));

    ctx.moveTo(this.scale(125), this.scale(52.1));
    ctx.lineTo(this.scale(66.8), this.scale(182.6));
    ctx.lineTo(this.scale(88.5), this.scale(182.6));
    ctx.lineTo(this.scale(100.2), this.scale(153.4));
    ctx.lineTo(this.scale(149.6), this.scale(153.4));
    ctx.lineTo(this.scale(162.6), this.scale(182.6));
    ctx.lineTo(this.scale(181.3), this.scale(182.6));
    ctx.lineTo(this.scale(125), this.scale(52.1));
    ctx.moveTo(this.scale(152), this.scale(135.4));
    ctx.lineTo(this.scale(108), this.scale(135.4));
    ctx.lineTo(this.scale(125), this.scale(94.5));
    ctx.lineTo(this.scale(142), this.scale(135.4));
    ctx.clip('evenodd');

    ctx.beginPath();
    this.particles.forEach(particle => {
      let x = this.scale(particle.x);
      let y = this.scale(particle.y);
      let age = Date.now() - particle.createdAt;
      let alpha = Math.max(0, 1 - age / MAX_AGE);
      ctx.fillStyle = `rgba(221,0,49,${alpha})`;
      ctx.beginPath();
      ctx.arc(x, y, (1 - alpha) * 100, 0, 2 * Math.PI);
      ctx.fill();
    });

    requestAnimationFrame(() => this.paint());
  }

  private scale(n: number) {
    return Math.floor(n * 2);
  }

}
