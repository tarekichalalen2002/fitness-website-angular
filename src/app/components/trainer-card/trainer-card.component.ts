import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trainer-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './trainer-card.component.html',
  styleUrl: './trainer-card.component.css',
  animations: [
    trigger('fadeIn', [
      state('top', style({ opacity: 0, transform: 'translateY(-50%)' })),
      state('bottom', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('top => bottom', animate('0.5s ease-in')),
    ]),
  ],
})
export class TrainerCardComponent {
  @Input() trainer: any;
  isSeen: boolean = false;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  ngOnInit() {
    setTimeout(() => {
      this.isSeen = true;
    }, this.trainer.id * 400 + 300);
  }
}
