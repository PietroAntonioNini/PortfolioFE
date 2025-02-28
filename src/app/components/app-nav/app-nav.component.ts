// app-nav.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environment/environment';

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

  env = environment

  constructor(private http: HttpClient, private router: Router) {}

  async sendContactRequest() {
    try {
      const url = `${this.env.apiUrl}/new-contact`;
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
