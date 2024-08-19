import { Component } from '@angular/core';
import {trainers} from '../../../../utils/trainers';
import { TrainerCardComponent } from '../trainer-card/trainer-card.component';

@Component({
  selector: 'app-trainers-home',
  standalone: true,
  imports: [TrainerCardComponent],
  templateUrl: './trainers-home.component.html',
  styleUrl: './trainers-home.component.css',
})
export class TrainersHomeComponent {
  trainers = trainers;
}
