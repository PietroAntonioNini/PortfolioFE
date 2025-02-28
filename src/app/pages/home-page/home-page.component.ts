import { RotatingLogosComponent } from './../../components/rotating-logos/rotating-logos.component';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [RotatingLogosComponent]
})
export class HomePageComponent {
  @Output() goToProjects = new EventEmitter<void>();
  
  constructor(private router: Router) {}

  onClickGoToProjects() {
    this.goToProjects.emit();
  }
}
