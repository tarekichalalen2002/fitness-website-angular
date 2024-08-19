import { Component, Input } from '@angular/core';
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
  standalone: true,
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  imports: [FontAwesomeModule],
  animations: [
    trigger('firstSeen', [
      state('true', style({ opacity: 1, transform: 'translateY(0)' })),
      state('false', style({ opacity: 0, transform: 'translateY(-50%)' })),
      transition('false => true', animate('0.8s ease-in-out')),
    ]),
  ],
})
export class CategoryCardComponent {
  @Input() category: any;
  faChevronRight = faChevronRight;
  isSeen: boolean = false;
  ngOnInit() {
    setTimeout(() => {
      this.isSeen = true;
    }, this.category.id * 400);
  }
}
