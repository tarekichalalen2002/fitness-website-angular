import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'home-navbar',
  templateUrl: './navbar.component.html',
  imports: [RouterOutlet, RouterModule],
})
export class HomeNavbarComponent {
  title = 'Navbar';
}
