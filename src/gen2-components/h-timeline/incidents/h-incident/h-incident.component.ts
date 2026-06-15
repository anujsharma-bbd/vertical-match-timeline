import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-h-incident',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './h-incident.component.html',
  styleUrl: './h-incident.component.scss'
})
export class HIncidentComponent {
  data = input<any>(null);
}
