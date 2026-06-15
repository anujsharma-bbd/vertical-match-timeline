import { HIncidentComponent } from 'src/gen2-components/h-timeline/incidents/h-incident/h-incident.component';
import { PenaltyComponent } from './incidents/penalty/penalty.component';

export interface HTimelineEvent {
  component: any;
  data: any;
}

export const FOOTBALL_H_TIMELINE_DATA: HTimelineEvent[] = [
  {
    component: HIncidentComponent,
    data: { direction: undefined, time: '0\'', icon: '🚀' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'home', time: '15\'', icon: '🟨' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'away', time: '16\'', icon: '🟥' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'home', time: '17\'', icon: '⚽' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'away', time: '18\'', icon: '🟥' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'home', time: '30\'', icon: '⚽' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'away', time: '45+2\'', icon: '🔴' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'home', time: '72\'', icon: '🏁' }
  }
];

export const FOOTBALL_H_TIMELINE_TOTAL_TIME = '90\'';
