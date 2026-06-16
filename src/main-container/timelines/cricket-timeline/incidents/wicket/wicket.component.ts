import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wicket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wicket.component.html',
  styleUrls: ['./wicket.component.scss']
})
export class WicketComponent {
  data = input<any>();
}
