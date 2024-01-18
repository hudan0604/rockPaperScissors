import { Component } from '@angular/core';
import { GameScoreComponent } from '../game-score/game-score.component';

@Component({
  selector: 'rps-game-header',
  standalone: true,
  imports: [GameScoreComponent],
  templateUrl: './game-header.component.html',
  styleUrl: './game-header.component.scss',
})
export class GameHeaderComponent {}
