import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from './components/home-navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'App';
}
