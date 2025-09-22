import { Routes } from '@angular/router';
import { Home} from './pages/home';
import {Ui} from './pages/ui';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path:'ui',
    component: Ui
  }
];
