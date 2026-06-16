import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent {
  data = input<any>();
}
