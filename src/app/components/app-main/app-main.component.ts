// app-main.component.ts
import { Component, Input, OnInit } from '@angular/core';
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
  @Input() projects: any[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
