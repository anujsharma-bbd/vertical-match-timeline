import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boundary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boundary.component.html',
  styleUrls: ['./boundary.component.scss']
})
export class BoundaryComponent {
  overs = input('0.0');
  team = input('Team');
  type = input('Boundary');
  runs = input('4');
  direction = input('left');
}
