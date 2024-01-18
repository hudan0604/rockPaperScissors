import { Routes } from '@angular/router';
import { GameWraperComponent } from './components/game-wraper/game-wraper.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GameWraperComponent,
  },
];
