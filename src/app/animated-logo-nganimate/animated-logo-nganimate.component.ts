import { Component, animate, keyframes, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-animated-logo-nganimate',
  templateUrl: './animated-logo-nganimate.component.html',
  styleUrls: ['../logo.scss', './animated-logo-nganimate.component.scss'],
  animations: [
    trigger('aState', [
      state('small', style({transform: 'scale(1)'})),
      state('large', style({transform: 'scale(4.2)'})),
      transition('small => large', animate('1s ease', keyframes([
        style({transform: 'scale(1)', offset: 0}),
        style({transform: 'scale(0.7) rotate(15deg)', offset: 0.15}),
        style({transform: 'scale(1)', offset: 0.3}),
        style({transform: 'scale(4.2)', offset: 1})
      ]))),
      transition('large => small', animate('1s ease', keyframes([
        style({transform: 'scale(4.2)', offset: 0}),
        style({transform: 'scale(5) rotate(-15deg)', offset: 0.15}),
        style({transform: 'scale(4.2)', offset: 0.3}),
        style({transform: 'scale(1)', offset: 1})
      ])))
    ])
  ]
})
export class AnimatedLogoNganimateComponent {
  aState = 'small';

  toggleAState() {
    this.aState = this.aState === 'small' ? 'large' : 'small';
  }
}
