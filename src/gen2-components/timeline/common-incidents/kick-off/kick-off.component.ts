import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kick-off',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kick-off.component.html',
  styleUrls: ['./kick-off.component.scss']
})
export class KickOffComponent {
  time = input('00:00\'');
  teamName = input('Team');
  direction = input('left');
}
