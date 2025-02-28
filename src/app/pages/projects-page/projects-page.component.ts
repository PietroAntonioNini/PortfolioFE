import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TechnologiesItemComponent } from '../../components/technologies-item/technologies-item.component';
import { AppMainComponent } from '../../components/app-main/app-main.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  imports: [CommonModule, RouterOutlet, TechnologiesItemComponent, AppMainComponent]
})
export class ProjectsPageComponent implements OnInit {

  // Esempio di URL. In futuro lo sposterai in environment.ts
  private baseApiUrl = 'http://127.0.0.1:8000';

  // Dati di paginazione
  apiLinks: any[] = [];
  apiPageNumber = 1;
  currentPage = 1;
  isLoading = true;

  // In Vue usavi "store.projects"; qui, per ora, un array di projects
  projects: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.isLoading = true;
    this.http.get<any>(`${this.baseApiUrl}/api/projects?page=${this.apiPageNumber}`)
      .subscribe({
        next: (res) => {
          // Prevediamo che l’API restituisca un oggetto simile a
          // { success: true, results: { data: [...], links: [...] } }
          if (res.success) {
            this.isLoading = false;
          }
          // Aggiunta percorso immagine (nel tuo caso)
          res.results.data.forEach((project: any) => {
            project.image = `${this.baseApiUrl}/storage/${project.image}`;
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

  changePage(direction: 'next' | 'prev'): void {
    const totalPages = 10; // Sostituisci con un valore reale o calcolalo dall’API

    if (direction === 'next' && this.currentPage < totalPages) {
      this.currentPage++;
    } else if (direction === 'prev' && this.currentPage > 1) {
      this.currentPage--;
    }

    this.apiPageNumber = this.currentPage;
    this.loadProjects();
  }

}