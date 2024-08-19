import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css',
  animations: [
    trigger('leftToRight', [
      state('left', style({ transform: 'translateX(-50%)', opacity: 0 })),
      state('right', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('left => right', animate('800ms ease-in-out')),
    ]),
    trigger('topToBottom', [
      state('top', style({ transform: 'translateY(-50%)', opacity: 0 })),
      state('bottom', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('top => bottom', animate('800ms 400ms ease-in-out')),
    ]),
    trigger("bottomToTop", [
      state("bottom", style({ transform: "translateY(50%)", opacity: 0 })),
      state("top", style({ transform: "translateY(0)", opacity: 1 })),
      transition("bottom => top", animate("800ms 800ms ease-in-out")),
    ])
  ],
})
export class LatestNewsComponent {
  faChevronRight = faChevronRight;
  isSeen: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.isSeen = true;
    }, 300);
  }
}
