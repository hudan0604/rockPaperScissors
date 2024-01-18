import { Component } from '@angular/core';
import { GameHeaderComponent } from '../game-header/game-header.component';
import { PlaySectionComponent } from '../play-section/play-section.component';
import { RulesTriggerComponent } from '../rules-trigger/rules-trigger.component';

@Component({
  selector: 'rps-game-wraper',
  standalone: true,
  imports: [GameHeaderComponent, PlaySectionComponent, RulesTriggerComponent],
  templateUrl: './game-wraper.component.html',
  styleUrl: './game-wraper.component.scss',
})
export class GameWraperComponent {}
