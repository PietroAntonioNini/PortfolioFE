import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  projects: any[] = [];

  logos = [
    { src: 'assets/image/angular.png', link: 'https://angular.dev/' },
    { src: 'assets/image/html.png', link: 'https://www.w3schools.com/html/' },
    { src: 'assets/image/css.png', link: 'https://www.w3schools.com/css/' },
    { src: 'assets/image/js.png', link: 'https://www.w3schools.com/js/' },
    { src: 'assets/image/ts.png', link: 'https://www.w3schools.com/typescript/' },
    { src: 'assets/image/rxjs.png', link: 'https://rxjs.dev/' },
    { src: 'assets/image/bootstrap.png', link: 'https://getbootstrap.com/' },
    { src: 'assets/image/sass.png', link: 'https://sass-lang.com/' },
    { src: 'assets/image/vite.svg', link: 'https://vitejs.dev/' },
    { src: 'assets/image/vue.png', link: 'https://vuejs.org/' },
    { src: 'assets/image/php.png', link: 'https://www.php.net/' },
    { src: 'assets/image/mysql.png', link: 'https://www.mysql.com/it/' },
    { src: 'assets/image/laravel.png', link: 'https://laravel.com/' },
    { src: 'assets/image/git.png', link: 'https://git-scm.com/' },
  ];
}
