import { 
  Component, 
  OnInit, 
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

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChildren('dynamicContainer', { read: ViewContainerRef })  containers!: QueryList<ViewContainerRef>;

  @Input() timelineData: TimelineEvent[] = [];

  ngOnInit(): void {
    // Initial render if data is already provided
    if (this.timelineData && this.timelineData.length > 0) {
      this.renderDynamicComponents();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Re-render when timelineData input changes
    if (changes['timelineData'] && !changes['timelineData'].firstChange) {
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

          const hostElement = componentRef.hostView as any;
          if (hostElement.rootNodes[0]) {
            hostElement.rootNodes[0].classList.add('event-component');
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

  addEvent(component: any, data: any): void {
    this.timelineData = [...this.timelineData, { component, data }];
    this.renderDynamicComponents();
  }

  removeEvent(index: number): void {
    this.timelineData = this.timelineData.filter((_, i) => i !== index);
    this.renderDynamicComponents();
  }
}
