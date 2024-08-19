import { Component } from '@angular/core';
import { CategoriesComponent } from '../../components/categories-home/categories.component';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LatestNewsComponent } from '../../components/latest-news/latest-news.component';
import { TrainersHomeComponent } from '../../components/trainers-home/trainers-home.component';
import { TestomonialsComponent } from '../../components/testomonials/testomonials.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    CategoriesComponent,
    FontAwesomeModule,
    LatestNewsComponent,
    TrainersHomeComponent,
    TestomonialsComponent,
  ],
})
export class HomeComponent {
  title = 'Home';
  faSpinner = faSpinner;
}
