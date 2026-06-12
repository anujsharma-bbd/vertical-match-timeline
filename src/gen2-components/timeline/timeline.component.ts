import { 
  Component, 
  OnInit, 
  ViewContainerRef, 
  ViewChild,
  ViewChildren,
  QueryList,
  OnDestroy,
  signal,
  effect,
  inject,
  input
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
export class TimelineComponent implements OnInit, OnDestroy {
  @ViewChildren('dynamicContainer', { read: ViewContainerRef }) 
  containers!: QueryList<ViewContainerRef>;

  // Input to accept timeline data
  timelineData = input<TimelineEvent[]>([]);

  // Signal to manage timeline events
  timelineEvents = signal<TimelineEvent[]>([]);

  // Effect to respond to timeline changes
  constructor() {
    effect(() => {
      const events = this.timelineEvents();
      if (events.length > 0) {
        this.renderDynamicComponents();
      }
    });
  }

  ngOnInit(): void {
    // Use provided data or load default
    const data = this.timelineData();
    if (data && data.length > 0) {
      this.timelineEvents.set(data);
    } else {
      this.loadTimelineData();
    }
  }

  /**
   * Load timeline data from metadata - fallback for when no data provided
   */
  private loadTimelineData(): void {
    // Default empty timeline
    this.timelineEvents.set([]);
  }

  /**
   * Dynamically render components based on metadata
   */
  private renderDynamicComponents(): void {
    // Wait for view to be initialized
    setTimeout(() => {
      const containerArray = this.containers.toArray();
      
      this.timelineEvents().forEach((event, index) => {
        if (containerArray[index]) {
          // Clear the specific container
          containerArray[index].clear();
          
          // Create component instance in the specific container
          const componentRef = containerArray[index].createComponent(event.component);
          
          // Pass data to component using setInput for signals
          if (componentRef.instance && event.data) {
            Object.keys(event.data).forEach(key => {
              componentRef.setInput(key, event.data[key]);
            });
          }

          // Add wrapper class
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

  /**
   * Get the time value from an event
   */
  getEventTime(index: number): string {
    const event = this.timelineEvents()[index];
    if (event && event.data) {
      return event.data.time || event.data.duration || event.data.overs || '—';
    }
    return '—';
  }

  /**
   * Public method to add new event dynamically
   */
  addEvent(component: any, data: any): void {
    const currentEvents = this.timelineEvents();
    this.timelineEvents.set([...currentEvents, { component, data }]);
  }

  /**
   * Public method to remove event by index
   */
  removeEvent(index: number): void {
    const currentEvents = this.timelineEvents();
    this.timelineEvents.set(currentEvents.filter((_, i) => i !== index));
  }
}
