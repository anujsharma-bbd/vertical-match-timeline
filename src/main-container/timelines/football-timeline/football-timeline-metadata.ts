import { GameEndComponent } from "src/gen2-components/v-timeline/common/game-end/game-end.component";
import { KickOffComponent } from "src/gen2-components/v-timeline/common/kick-off/kick-off.component";
import { GoalComponent } from "./incidents/goal/goal.component";
import { PenaltyComponent } from "./incidents/penalty/penalty.component";


interface TimelineEvent {
  component: any;
  data: any;
}

export const FOOTBALL_TIMELINE_DATA: TimelineEvent[] = [
  {
    component: GameEndComponent,
    data: { direction: 'full', teamName: 'Team A', score: '2-1', duration: '90\'' }
  },
  {
    component: GoalComponent,
    data: { direction: 'left', teamName: 'Team A', scorer: 'John Smith', assist: 'Mike Johnson', time: '85\'' }
  },
  {
    component: GoalComponent,
    data: { direction: 'right', teamName: 'Team B', scorer: 'Carlos Silva', assist: 'None', time: '72\'' }
  },
  {
    component: PenaltyComponent,
    data: { direction: 'left', teamName: 'Team A', player: 'John Smith', time: '45+2\'' }
  },
  {
    component: GoalComponent,
    data: { direction: 'right', teamName: 'Team A', scorer: 'Alex Brown', assist: 'John Smith', time: '15\'' }
  },
  {
    component: KickOffComponent,
    data: { direction: 'full', teamName: 'Team A', time: '00:00\'' }
  }
];
