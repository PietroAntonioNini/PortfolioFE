import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  projects: any[] = [];

  logos = [
    { type: 'angular', src: 'assets/image/angular.png', link: 'https://angular.dev/' },
    { type: 'html',    src: 'assets/image/html.png',    link: 'https://www.w3schools.com/html/' },
    { type: 'css',     src: 'assets/image/css.png',     link: 'https://www.w3schools.com/css/' },
    { type: 'js',      src: 'assets/image/js.png',      link: 'https://www.w3schools.com/js/' },
    { type: 'ts',      src: 'assets/image/ts.png',      link: 'https://www.typescriptlang.org/' },
    { type: 'rxjs',    src: 'assets/image/rxjs.png',    link: 'https://rxjs.dev/' },
    { type: 'bootstrap', src: 'assets/image/bootstrap.png', link: 'https://getbootstrap.com/' },
    { type: 'sass',    src: 'assets/image/sass.png',    link: 'https://sass-lang.com/' },
    { type: 'vite',    src: 'assets/image/vite.png',    link: 'https://vitejs.dev/' },
    { type: 'vue',     src: 'assets/image/vue.png',     link: 'https://vuejs.org/' },
    { type: 'php',     src: 'assets/image/php.png',     link: 'https://www.php.net/' },
    { type: 'mysql',   src: 'assets/image/mysql.png',   link: 'https://www.mysql.com/it/' },
    { type: 'laravel', src: 'assets/image/laravel.png', link: 'https://laravel.com/' },
    { type: 'git',     src: 'assets/image/git.png',     link: 'https://git-scm.com/' },
  ];
}
