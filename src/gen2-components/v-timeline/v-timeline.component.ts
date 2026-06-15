import {
  Component,
  ViewContainerRef,
  ViewChildren,
  QueryList,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  component: any;
  data: any;
}

const HOST_COMPONENT_CLASS_NAME = 'sbb2b-incident-component';
@Component({
  selector: 'app-v-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v-timeline.component.html',
  styleUrls: ['./v-timeline.component.scss']
})
export class TimelineComponent implements OnChanges, OnDestroy {
  @ViewChildren('dynamicContainer', { read: ViewContainerRef }) containers!: QueryList<ViewContainerRef>;

  @Input() timelineData: TimelineEvent[] = [];

  ngOnChanges({ timelineData }: SimpleChanges): void {
    if (timelineData) {
      this.renderDynamicComponents();
    }
  }

  private renderDynamicComponents(): void {
    setTimeout(() => {
      const containerArray = this.containers.toArray();

      this.timelineData.forEach((event, index) => {
        if (containerArray[index]) {
          containerArray[index].clear();

          const componentRef = containerArray[index].createComponent(event.component);

          // Pass entire data object as single property
          if (componentRef.instance && event.data) {
            componentRef.setInput('data', event.data);
          }

          // Add wrapper class
          const hostElement = componentRef.hostView as any;
          if (hostElement.rootNodes[0]) {
            hostElement.rootNodes[0].classList.add(HOST_COMPONENT_CLASS_NAME);
          }
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.containers) {
      this.containers.forEach(container => container.clear());
    }
  }

  getEventTime(index: number): string {
    const event = this.timelineData[index];
    if (event && event.data) {
      return event.data.time || event.data.duration || event.data.overs || '—';
    }
    return '—';
  }

  getDirection(event: TimelineEvent): string {
    return event?.data?.direction ?? 'full';
  }

  getTimelineClass(direction: string): string {
    return `timeline-item timeline-${direction}`;
  }
}
