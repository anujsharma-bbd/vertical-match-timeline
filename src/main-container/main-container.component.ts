import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from '../gen2-components/v-timeline/v-timeline.component';
import { HTimelineComponent } from '../gen2-components/h-timeline/h-timeline.component';
import { FOOTBALL_TIMELINE_DATA } from '../timelines/football-timeline/football-timeline-metadata';
import { CRICKET_TIMELINE_DATA } from '../timelines/cricket-timeline/cricket-timeline-metadata';
import { FOOTBALL_H_TIMELINE_DATA, FOOTBALL_H_TIMELINE_TOTAL_TIME } from '../timelines/football-timeline/football-h-timeline-metadata';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [CommonModule, TimelineComponent, HTimelineComponent],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  activeTab = signal<'football' | 'cricket' | 'hfootball'>('football');
  
  footballData = FOOTBALL_TIMELINE_DATA;
  cricketData = CRICKET_TIMELINE_DATA;
  footballHData = FOOTBALL_H_TIMELINE_DATA;
  footballHTotalTime = FOOTBALL_H_TIMELINE_TOTAL_TIME;
}

