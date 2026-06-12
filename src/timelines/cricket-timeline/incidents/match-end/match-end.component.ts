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
  data = input<any>();
}
