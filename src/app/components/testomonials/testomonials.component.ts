import { Component } from '@angular/core';
import { testomonials } from '../../../../utils/testomonials';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faQuoteLeft,
  faQuoteRight,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testomonials',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './testomonials.component.html',
  styleUrl: './testomonials.component.css',
  animations: [
    trigger('imageAnime', [
      state('current', style({ opacity: 1, transform: 'scale(1)' })),
      state('next', style({ transform: 'translateX(85vw)', scale: 0.75 })),
      state('last', style({ transform: 'translateX(105vw)', scale: 0.75 })),
      transition('next => current', animate('0.5s ease-in')),
      transition('last => current', animate('0.5s ease-in')),
      transition('current => next', animate('0.5s ease-in')),
      transition('current => last', animate('0.5s ease-in')),
      transition('last => next', animate('0.5s ease-in')),
      transition('next => last', animate('0.5s ease-in')),
    ]),
  ],
})
export class TestomonialsComponent {
  faQuoteLeft = faQuoteLeft;
  faQuoteRight = faQuoteRight;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  testomonials: any = testomonials;
  currentTestomonial: number = 0;
  nextTestomonial: number = 1;
  lastTestomonial: number = 2;
  changing: boolean = false;
  moveright() {
    this.changing = true;
    this.currentTestomonial = this.nextTestomonial;
    this.nextTestomonial =
      this.currentTestomonial === 2 ? 0 : this.currentTestomonial + 1;
    this.lastTestomonial =
      this.currentTestomonial === 0 ? 2 : this.currentTestomonial - 1;
    setTimeout(() => {
      this.changing = false;
    }, 500);
  }
  moveleft() {
    this.changing = true;
    this.currentTestomonial = this.lastTestomonial;
    this.nextTestomonial =
      this.currentTestomonial === 2 ? 0 : this.currentTestomonial + 1;
    this.lastTestomonial =
      this.currentTestomonial === 0 ? 2 : this.currentTestomonial - 1;
    setTimeout(() => {
      this.changing = false;
    }, 500);
  }
  handleclick(id: number) {
    if (id === this.nextTestomonial) {
      this.moveright();
    } else if (id === this.lastTestomonial) {
      this.moveleft();
    }
  }
}
