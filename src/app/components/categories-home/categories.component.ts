import { Component } from '@angular/core';

import { categories } from '../../../../utils/categories';
import { CategoryCardComponent } from '../category-home/category-card.component';

@Component({
  selector: 'categories-home',
  templateUrl: './categories.component.html',
  standalone: true,
  imports: [CategoryCardComponent],
})
export class CategoriesComponent {
  title = 'Categories';
  categories = categories;
}
