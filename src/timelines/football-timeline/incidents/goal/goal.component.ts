import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent {
  time = input('00:00\'');
  teamName = input('Team');
  scorer = input('Player');
  assist = input('');
  direction = input('left');
}
