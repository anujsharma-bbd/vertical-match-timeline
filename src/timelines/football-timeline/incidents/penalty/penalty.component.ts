import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent {
  time = input('45+2\'');
  teamName = input('Team');
  player = input('Player Name');
  direction = input('left');
}
