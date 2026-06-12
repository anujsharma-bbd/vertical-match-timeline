import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../gen2-components/timeline/timeline.component';
import { FOOTBALL_TIMELINE_DATA } from '../timelines/football-timeline/football-timeline-metadata';
import { CRICKET_TIMELINE_DATA } from '../timelines/cricket-timeline/cricket-timeline-metadata';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  activeTab = signal<'football' | 'cricket'>('football');
  
  footballData = FOOTBALL_TIMELINE_DATA;
  cricketData = CRICKET_TIMELINE_DATA;
}

