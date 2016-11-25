import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { Particle } from './particle';

@Component({
  selector: 'app-canvas-logo',
  templateUrl: './canvas-logo.component.html',
  styleUrls: ['./canvas-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CanvasLogoComponent implements OnChanges {
  @Input() particles: Particle[];
  @ViewChild('canvas') canvasRef: ElementRef;

  constructor() { }

  ngOnChanges() {
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
    ctx.fillStyle = '#DD0031';
    for (let particle of this.particles) {
      let x = this.scale(particle.x);
      let y = this.scale(particle.y);
      ctx.moveTo(x, y);
      ctx.rect(x, y, 1, 1);
    }
    ctx.fill();
  }

  private scale(n: number) {
    return Math.floor(n * 2);
  }

}
