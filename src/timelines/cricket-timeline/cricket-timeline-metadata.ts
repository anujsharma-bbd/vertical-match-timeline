import { WicketComponent } from './incidents/wicket/wicket.component';
import { SixComponent } from './incidents/six/six.component';
import { FourComponent } from './incidents/four/four.component';
import { BoundaryComponent } from './incidents/boundary/boundary.component';
import { TossComponent } from './incidents/toss/toss.component';
import { MatchEndComponent } from './incidents/match-end/match-end.component';

interface TimelineEvent {
  component: any;
  data: any;
}

export const CRICKET_TIMELINE_DATA: TimelineEvent[] = [
  {
    component: MatchEndComponent,
    data: { direction: 'full', overs: '20.0', winner: 'Team India', result: 'Won by 3 wickets' }
  },
  {
    component: WicketComponent,
    data: { direction: 'left', overs: '19.4', team: 'Team India', player: 'Rohit Sharma', dismissalType: 'Caught by Johnson' }
  },
  {
    component: SixComponent,
    data: { direction: 'right', overs: '18.2', team: 'Team Australia', batter: 'David Warner' }
  },
  {
    component: FourComponent,
    data: { direction: 'left', overs: '15.3', team: 'Team India', batter: 'Virat Kohli' }
  },
  {
    component: BoundaryComponent,
    data: { direction: 'right', overs: '10.1', team: 'Team Australia', type: 'Boundary', runs: '4' }
  },
  {
    component: TossComponent,
    data: { direction: 'full', overs: '0.0', team: 'Team India', decision: 'Elected to bat' }
  }
];
