import { HIncidentComponent } from 'src/gen2-components/h-timeline/incidents/h-incident/h-incident.component';
import { PenaltyComponent } from './incidents/penalty/penalty.component';

export interface HTimelineEvent {
  component: any;
  data: any;
}

export const FOOTBALL_H_TIMELINE_DATA: HTimelineEvent[] = [
  {
    component: HIncidentComponent,
    data: { direction: 'center', time: '0\'', icon: '🚀' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'home', time: '8\'', icon: '⚽' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'away', time: '20\'', icon: '🟨' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'home', time: '25\'', icon: '⚽' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'away', time: '30\'', icon: '🔴' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'home', time: '35\'', icon: '🟨🟥' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'away', time: '65\'', icon: '🟥' }
  },
  {
    component: HIncidentComponent,
    data: { direction: 'center', time: '93\'', icon: '🏁' }
  }
];

export const FOOTBALL_H_TIMELINE_TOTAL_TIME = '93:00';
