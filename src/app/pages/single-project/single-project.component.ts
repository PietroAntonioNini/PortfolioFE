import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environment/environment';

@Component({
  standalone: true,
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
  imports: [CommonModule]
})
export class SingleProjectComponent implements OnInit {

  project: any = null;
  projectId!: string;

  env = environment

  techImages: { [key: string]: string } = {
    angular: 'angular.png',
    html: 'html.png',
    css: 'css.png',
    js: 'js.png',
    ts: 'ts.png',
    bootstrap: 'bootstrap.png',
    laravel: 'laravel.png',
    mysql: 'mysql.png',
    php: 'php.png',
    rxjs: 'rxjs.png',
    sass: 'sass.png',
    vue: 'vue.png',
    axios: 'axios.png',
    git: 'git.png',
    vite: 'vite.png',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Leggi il parametro 'id' dalla rotta: '/projects/:id'
    this.projectId = this.route.snapshot.paramMap.get('id') || '';

    // Se per qualche ragione non hai l'id, torna alla home
    if (!this.projectId) {
      this.router.navigate(['/']);
      return;
    }

    this.loadProject();
  }

  loadProject(): void {
    this.http.get<any>(`${this.env.apiUrl}/api/projects/${this.projectId}`)
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.project = res.project;
            // Se c'è un'immagine, aggiungi il path
            if (this.project.image) {
              this.project.image = `${this.env.apiUrl}/storage/${this.project.image}`;
            }
          } else {
            this.router.navigate(['/']);
          }
        },
        error: () => {
          // Errore => rimandiamo a home
          this.router.navigate(['/']);
        }
      });
  }

  // Ritorniamo il path all'immagine della tecnologia
  getImage(techType: string): string {
    // Copia i file in "src/assets/"
    // e punta a 'assets/<file>.png'
    return this.techImages[techType]
      ? `assets/${this.techImages[techType]}`
      : 'assets/default.png'; 
      // (se vuoi un fallback)
  }
}
