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
  data = input<any>();
}
