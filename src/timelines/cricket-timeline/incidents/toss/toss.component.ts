import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toss',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toss.component.html',
  styleUrls: ['./toss.component.scss']
})
export class TossComponent {
  overs = input('0.0');
  team = input('Team');
  decision = input('Elected to bat');
}
