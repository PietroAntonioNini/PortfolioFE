import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-rotating-logos',
  templateUrl: './rotating-logos.component.html',
  styleUrls: ['./rotating-logos.component.scss'],
  imports: [CommonModule],
})
export class RotatingLogosComponent {
  
  logos = [
    { src: 'assets/image/angular.png', alt: 'Angular' },
    { src: 'assets/image/html.png', alt: 'HTML' },
    { src: 'assets/image/css.png', alt: 'CSS' },
    { src: 'assets/image/js.png', alt: 'JavaScript' },
    { src: 'assets/image/ts.png', alt: 'TypeScript' },
    { src: 'assets/image/rxjs.png', alt: 'RxJs' },
    { src: 'assets/image/bootstrap.png', alt: 'Bootstrap' },
    { src: 'assets/image/php.png', alt: 'PHP' },
    { src: 'assets/image/laravel.png', alt: 'Laravel' },
    { src: 'assets/image/mysql.png', alt: 'MySQL' },
    { src: 'assets/image/vue.png', alt: 'Vue.js' },
    { src: 'assets/image/vite.png', alt: 'Vite' },
    { src: 'assets/image/sass.png', alt: 'Sass' },
    { src: 'assets/image/git.png', alt: 'Git' },
  ];
}
