import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../services/store.service';
import { TechnologiesItemComponent } from '../../components/technologies-item/technologies-item.component';
import { AppMainComponent } from '../../components/app-main/app-main.component';
import { RouterOutlet } from '@angular/router';
import { environment } from '../../../environment/environment';

@Component({
  standalone: true,
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  imports: [CommonModule, RouterOutlet, TechnologiesItemComponent, AppMainComponent]
})
export class ProjectsPageComponent implements OnInit {
  private baseApiUrl = 'http://127.0.0.1:8000';
  apiLinks: any[] = [];
  apiPageNumber = 1;
  currentPage = 1;
  isLoading = true;

  env = environment

  projects: any[] = [];
  currentFilter: string = '';

  constructor(private http: HttpClient, private store: StoreService) { }

  ngOnInit(): void {
    this.loadProjects(true);
  }

  loadProjects(showLoader: boolean = true): void {
    if (showLoader) {
      this.isLoading = true;
    }
    let url = `${this.baseApiUrl}/api/projects?page=${this.apiPageNumber}`;
    if (this.currentFilter) {
      url += `&filter=${encodeURIComponent(this.currentFilter)}`;
    }
    this.http.get<any>(url)
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.isLoading = false;
          }
          // Aggiunta percorso immagine (nel tuo caso)
          res.results.data.forEach((project: any) => {
            project.image = `http://127.0.0.1:8000/storage/${project.image}`;
          });

          this.projects = res.results.data;
          this.apiLinks = res.results.links;
        },
        error: () => {
          this.isLoading = false;
          console.error('Errore nel caricamento dei progetti');
        }
      });
  }

  // Funzione per impostare il filtro
  setFilter(filter: string): void {
    this.currentFilter = filter;
    this.currentPage = 1;
    this.apiPageNumber = 1;
    this.loadProjects(false);
  }

  changePage(direction: 'next' | 'prev'): void {
    const totalPages = 10; // Sostituisci con un valore reale o calcolalo dall’API

    if (direction === 'next' && this.currentPage < totalPages) {
      this.currentPage++;
    } else if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    }

    this.apiPageNumber = this.currentPage;
    this.loadProjects(false);
  }

}