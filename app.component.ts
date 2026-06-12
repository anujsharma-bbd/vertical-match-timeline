import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './src/main-container/main-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainContainerComponent],
  template: `
    <app-main-container></app-main-container>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'Angular Dynamic Timeline Demo';
}
