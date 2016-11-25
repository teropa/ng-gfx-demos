import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-canvas-logo',
  templateUrl: './basic-canvas-logo.component.html',
  styleUrls: ['./basic-canvas-logo.component.scss']
})
export class BasicCanvasLogoComponent implements OnInit {
  @ViewChild('canvas') canvasRef: ElementRef;

  constructor() { }

  ngOnInit() {
    let ctx: CanvasRenderingContext2D =
      this.canvasRef.nativeElement.getContext('2d');


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
    for (let i=0 ; i < 50000 ; i++) {
      let x = this.scale(Math.random() * 250);
      let y = this.scale(Math.random() * 250);
      ctx.moveTo(x, y);
      ctx.arc(x, y, 1, 0, Math.PI*2);
    }
    ctx.fill();
  }

  private scale(n: number) {
    return n * 2;
  }

}
