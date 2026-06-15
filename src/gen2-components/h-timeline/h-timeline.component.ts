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
  @Input() iconOnly: boolean = false;
  @Input() totalTime: string = '';

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
