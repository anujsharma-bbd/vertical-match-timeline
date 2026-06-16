import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-free-hit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './free-hit.component.html',
  styleUrls: ['./free-hit.component.scss']
})
export class FreeHitComponent {
  data = input<any>();
}
