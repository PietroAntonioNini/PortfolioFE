import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';

@Component({
  standalone: true,
  selector: 'app-rotating-logos',
  templateUrl: './rotating-logos.component.html',
  styleUrls: ['./rotating-logos.component.scss'],
  imports: [CommonModule],
})
export class RotatingLogosComponent {
  constructor(private store: StoreService) {}
  
  get logos() {
    return this.store.logos;
  }
}
