import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    AppNavComponent,
    AppFooterComponent,
    HomePageComponent,
    CommonModule
  ],
})
export class AppComponent {
  title = 'PortfolioFE';

  isSkip = 1;

  // Metodo richiamato da HomePageComponent
  goToProjects() {
    this.isSkip = 0;
  }
}
