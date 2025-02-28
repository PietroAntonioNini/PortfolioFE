// app-footer.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  imports: [CommonModule]
})
export class AppFooterComponent implements OnInit {
  isLoading = true;
  // Se volevi usare "apiPageNumber", definiscilo
  apiPageNumber = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.apiCall();
  }

  apiCall(): void {
    // Esempio, URL e logica fittizia
    const url = `https://laravel-portfolio-backend-443dfe2e95ce.herokuapp.com/api/projects?page=${this.apiPageNumber}`;

    this.isLoading = true;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        if (res.success) {
          this.isLoading = false;
        }
      },
      error: () => {
        // In caso di errore, potresti decidere di settare isLoading a false
        // o mostrare un messaggio
        this.isLoading = false;
      }
    });
  }
}
