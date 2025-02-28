import { Component } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-technologies-item',
  templateUrl: './technologies-item.component.html',
  styleUrls: ['./technologies-item.component.scss'],
  imports: [CommonModule]
})
export class TechnologiesItemComponent {

  constructor(private store: StoreService) {}

  get logos() {
    return this.store.logos;
  }
}
