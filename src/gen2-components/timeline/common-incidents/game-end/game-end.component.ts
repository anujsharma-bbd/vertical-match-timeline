import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-end',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-end.component.html',
  styleUrls: ['./game-end.component.scss']
})
export class GameEndComponent {
  duration = input('90\'');
  teamName = input('Match');
  score = input('2-1');
  direction = input('full');
}
