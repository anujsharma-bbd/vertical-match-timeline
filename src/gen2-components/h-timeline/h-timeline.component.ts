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

export interface TimelineEvent {
  component: any;
  data: any;
}

const HOST_COMPONENT_CLASS_NAME = 'h-incident-component';

@Component({
  selector: 'app-h-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './h-timeline.component.html',
  styleUrls: ['./h-timeline.component.scss']
})
export class HTimelineComponent implements OnChanges, OnDestroy {
  @ViewChildren('dynamicContainer', { read: ViewContainerRef }) containers!: QueryList<ViewContainerRef>;

  @Input() timelineData: TimelineEvent[] = [];
  @Input() totalTime: string = '';

  getEventPosition(timeStr: string): number {
    const eventMin = this.parseTimeToMinutes(timeStr);
    const totalMin = this.parseTimeToMinutes(this.totalTime) || 93;
    if (totalMin === 0) return 0;
    return Math.min(Math.max((eventMin / totalMin) * 100, 0), 100);
  }

  parseTimeToMinutes(timeStr: string): number {
    if (!timeStr) return 0;
    // Extract number from timeStr. E.g. "45+2'" becomes 47. "93:00" becomes 93. "0'" becomes 0.
    const cleanStr = timeStr.replace(/[^0-9+.:]/g, '');
    if (cleanStr.includes(':')) {
      const parts = cleanStr.split(':');
      return (parseFloat(parts[0]) || 0) + ((parseFloat(parts[1]) || 0) / 60);
    }
    if (cleanStr.includes('+')) {
      const parts = cleanStr.split('+');
      return parts.reduce((acc, val) => acc + (parseFloat(val) || 0), 0);
    }
    return parseFloat(cleanStr) || 0;
  }

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

          const element = componentRef.location.nativeElement as HTMLElement;
          element.classList.add(HOST_COMPONENT_CLASS_NAME);
        }
      });
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.containers) {
      this.containers.forEach(container => container.clear());
    }
  }
}
