import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-six',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.scss']
})
export class SixComponent {
  data = input<any>();
}
