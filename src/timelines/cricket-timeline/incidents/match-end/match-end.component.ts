import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-end',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-end.component.html',
  styleUrls: ['./match-end.component.scss']
})
export class MatchEndComponent {
  overs = input('20.0');
  winner = input('Team');
  result = input('Won by 5 wickets');
}
