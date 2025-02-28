// app-main.component.ts
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss'],
  imports: [
    CommonModule,
    ProjectCardComponent,
  ]
})
export class AppMainComponent implements OnInit {
  
  projects: any[] = [];

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.projects = this.store.projects;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
