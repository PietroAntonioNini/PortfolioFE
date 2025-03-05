import { Routes } from '@angular/router';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SingleProjectComponent } from './pages/single-project/single-project.component';

export const routes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent,
  },
  {
    path: 'projects/:slug',
    component: SingleProjectComponent,
  },
  // Se vuoi un eventuale wildcard:
  // { path: '**', redirectTo: '' }
];

