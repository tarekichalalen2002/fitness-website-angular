import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from './components/home-navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeNavbarComponent, FooterComponent, HomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'App';
}
