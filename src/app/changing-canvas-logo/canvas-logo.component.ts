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

  ngOnChanges() {
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');

    // Clear any previous content.
    ctx.clearRect(0, 0, 500, 500);

    // Draw the clip path that will mask everything else
    // that we'll draw later.
    ctx.beginPath();
    ctx.moveTo(250, 60);
    ctx.lineTo(63.8, 126.4);
    ctx.lineTo(92.2, 372.6);
    ctx.lineTo(250, 460);
    ctx.lineTo(407.8, 372.6);
    ctx.lineTo(436.2, 126.4);
    ctx.moveTo(250, 104.2);
    ctx.lineTo(133.6, 365.2);
    ctx.lineTo(177, 365.2);
    ctx.lineTo(200.4, 306.8);
    ctx.lineTo(299.2, 306.8);
    ctx.lineTo(325.2, 365.2);
    ctx.lineTo(362.6, 365.2);
    ctx.lineTo(250, 104.2);
    ctx.moveTo(304, 270.8);
    ctx.lineTo(216, 270.8);
    ctx.lineTo(250, 189);
    ctx.lineTo(284, 270.8);
    ctx.clip('evenodd');

    // Draw the points given as input
    ctx.beginPath();
    ctx.fillStyle = '#DD0031';
    for (let {x, y} of this.particles) {
      ctx.moveTo(x, y);
      ctx.rect(x, y, 1, 1);
    }
    ctx.fill();
  }

}
