// app-nav.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
  // Import moduli e direttive di cui hai bisogno
  imports: [CommonModule, RouterLink, FormsModule]
})
export class AppNavComponent {
  formData = {
    name: '',
    address: '',
    message: ''
  };
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  async sendContactRequest() {
    try {
      // URL di esempio (sostituisci con la tua)
      const url = 'https://laravel-portfolio-backend-443dfe2e95ce.herokuapp.com/api/new-contact';
      
      const response = await this.http.post(url, this.formData).toPromise();

      this.successMessage = 'Messaggio inviato con successo!';
      this.errorMessage = '';
      this.formData = { name: '', address: '', message: '' };

    } catch (error) {
      this.errorMessage = 'Errore durante l\'invio del messaggio. Riprova più tardi.';
      this.successMessage = '';
      console.error(error);
    }
  }

  get isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}
