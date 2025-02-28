import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  imports: [CommonModule, RouterLink]
})
export class ProjectCardComponent {

  @Input() project: any;

  techImages: Record<string, string> = {
    html: 'assets/image/html.png',
    css: 'assets/image/css.png',
    javascript: 'assets/image/js.png',
    bootstrap: 'assets/image/bootstrap.png',
    laravel: 'assets/image/laravel.png',
    mysql: 'assets/image/mysql.png',
    php: 'assets/image/php.png',
    sass: 'assets/image/sass.png',
    vue: 'assets/image/vue.png',
    axios: 'assets/image/axios.png',
    vite: 'assets/image/vite.svg',
  };

  getImage(techType: string): string | undefined {
    if (this.techImages.hasOwnProperty(techType)) {
      return this.techImages[techType];
    }
    return undefined;
  }

  getCleanImageUrl(image: string): string {
    // Esempio della regex che usavi:
    const googleDriveId = image.replace(/https:\/\/.*\/storage\//, '');
    return googleDriveId;
  }

}