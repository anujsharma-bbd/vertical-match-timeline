# Angular Dynamic Timeline Component Demo

A modern Angular 17+ demo showcasing dynamic component creation and rendering with a beautiful, responsive sports timeline interface supporting multiple timelines (Cricket & Football).

## 🎯 Features

### Latest Angular Features Used
- **Standalone Components** - All components use the new standalone API
- **Control Flow** - Modern `@if`, `@for`, and `@let` syntax (no *ngIf, *ngFor)
- **OnChanges Lifecycle** - Reactive updates via `ngOnChanges` hook
- **Input Properties** - Type-safe `@Input()` decorators
- **ViewContainerRef** - Dynamic component rendering and instantiation
- **Type Safety** - Full TypeScript support with strict interfaces

### Dynamic Rendering
- ✅ Dynamically load components based on metadata
- ✅ Pass typed data to dynamic components
- ✅ Support for three layout directions: **left**, **right**, and **full** width
- ✅ Add/remove timeline events at runtime
- ✅ Beautiful animations, transitions, and responsive design
- ✅ Vertical timeline line connecting all events

### Timeline Features
- **Cricket Timeline** - Match events including wickets, sixes, fours, free hits, toss, and match end
- **Football Timeline** - Match events including goals, penalties, kick-offs, and game end
- **Flexible Event Layout** - Events can be left-aligned, right-aligned, or full-width
- **Shared Components** - Reusable KickOff and GameEnd components across sports

## 📁 Project Structure

```
src/
├── gen2-components/
│   └── timeline/
│       ├── timeline.component.ts       # Main timeline container
│       ├── timeline.component.html     # Dynamic event rendering
│       ├── timeline.component.scss     # Timeline styles
│       └── common-incidents/
│           ├── kick-off/              # Kick-off event component
│           └── game-end/              # Game end event component
│
├── timelines/
│   ├── cricket-timeline/
│   │   ├── cricket-timeline-metadata.ts # Cricket events data
│   │   └── incidents/
│   │       ├── wicket/                  # Wicket event
│   │       ├── six/                     # Six runs event
│   │       ├── four/                    # Four runs event
│   │       ├── boundary/                # Boundary event
│   │       ├── toss/                    # Toss event
│   │       ├── match-end/               # Match end event
│   │       └── free-hit/                # Free hit event
│   │
│   └── football-timeline/
│       ├── football-timeline-metadata.ts # Football events data
│       └── incidents/
│           ├── goal/                    # Goal scoring event
│           └── penalty/                 # Penalty event
│
├── main.ts                  # Application bootstrap
├── app.component.ts         # Root component
├── styles.scss              # Global styles
├── index.html              # HTML template
├── angular.json            # Angular configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🏗️ Architecture

### TimelineComponent
The core component that manages dynamic rendering of timeline events. It:
- Accepts `@Input() timelineData: TimelineEvent[]`
- Supports three layout directions via `getDirection()` method
- Dynamically creates component instances for each event
- Passes typed data to child components via `setInput('data', eventData)`

### TimelineEventData Interface
```typescript
interface TimelineEventData {
  direction: 'left' | 'right' | 'full';  // Mandatory layout direction
  [key: string]: any;                    // Additional sport-specific properties
}
```

### Event Components
Each event component (Wicket, Six, Goal, Penalty, etc.):
- Accepts a single `data = input<any>()` property
- Accesses sport-specific data via `data()?.propertyName`
- Follows consistent structure with icon, details, and description

## 🎨 Layout Directions

### Left Aligned (`'left'`)
- Content positioned on the left
- Marker (circle + time) positioned on the right
- Typical for odd-indexed events

### Right Aligned (`'right'`)
- Content positioned on the right
- Marker (circle + time) positioned on the left
- Typical for even-indexed events

### Full Width (`'full'`)
- Content centered and spans full width
- Marker positioned on top
- Used for significant events (match start, match end, toss)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn
- Angular CLI 17+

### Installation

```bash
# Install dependencies
npm install

# Start development server
ng serve
# or
npm start

# Navigate to http://localhost:4200/
```

### Build for Production

```bash
npm run build
```

Output will be in `dist/angular-timeline-demo/`

## 📝 Usage Example

### Using Cricket Timeline

```typescript
import { TimelineComponent } from './gen2-components/timeline/timeline.component';
import { CRICKET_TIMELINE_DATA } from './timelines/cricket-timeline/cricket-timeline-metadata';

@Component({
  selector: 'app-root',
  template: `<app-timeline [timelineData]="timelineData"></app-timeline>`,
  imports: [TimelineComponent]
})
export class AppComponent {
  timelineData = CRICKET_TIMELINE_DATA;
}
```

### Adding a New Timeline Event Dynamically

```typescript
import { SixComponent } from './timelines/cricket-timeline/incidents/six/six.component';

// Add a new Six event
this.timelineData = [
  ...this.timelineData,
  {
    component: SixComponent,
    data: {
      direction: 'left',
      overs: '12.3',
      team: 'Team Australia',
      batter: 'Steve Smith'
    }
  }
];
```

### Creating a Custom Event Component

```typescript
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-event',
  standalone: true,
  imports: [CommonModule],
  template: `<div>{{ data()?.message }}</div>`
})
export class CustomEventComponent {
  data = input<any>();
}
```

## 🎮 Available Event Components

### Cricket Events
- **TossComponent** - Toss announcement
- **WicketComponent** - Player dismissal
- **SixComponent** - Six runs scored
- **FourComponent** - Four runs scored
- **BoundaryComponent** - Boundary hit
- **FreeHitComponent** - Free hit event
- **MatchEndComponent** - Match conclusion

### Football Events
- **GoalComponent** - Goal scored (with assist info)
- **PenaltyComponent** - Penalty kick
- **KickOffComponent** - Match kick-off
- **GameEndComponent** - Match end with final score

## 🎯 Key Implementation Details

### Dynamic Component Loading
```typescript
const componentRef = container.createComponent(event.component);
if (componentRef.instance && event.data) {
  componentRef.setInput('data', event.data);
}
```

### Direction-based Styling
```scss
.timeline-left { /* Content left, marker right */ }
.timeline-right { /* Content right, marker left */ }
.timeline-full { /* Content centered, marker on top */ }
```

### Vertical Timeline Line
- Automatically connects events
- Hidden on first event
- Positioned absolutely relative to each marker
- Gradient styling for visual appeal

## 🔧 Technologies

- **Angular 17+** - Modern framework features
- **TypeScript 5+** - Strong typing and interfaces
- **SCSS** - Advanced styling with variables and mixins
- **Responsive Design** - Mobile and desktop compatible

## 📦 Dependencies

- `@angular/core` - Core Angular framework
- `@angular/common` - Common Angular utilities

## 🌟 Highlights

✨ **Type-Safe Events** - Mandatory `direction` property in event data
✨ **Flexible Layouts** - Three layout modes for different event types
✨ **Performance Optimized** - Change detection on input changes only
✨ **Reusable Components** - Shared components across multiple timelines
✨ **Beautiful UI** - Gradient backgrounds, smooth animations, responsive design
✨ **Easy to Extend** - Simple pattern for adding new event types

## 📄 License

MIT

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Built with ❤️ using Angular 17+**

### Creating Custom Event Components

```typescript
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  standalone: true,
  template: `
    <div class="event">
      {{ eventName }}
      @if (details) {
        <p>{{ details }}</p>
      }
    </div>
  `
})
export class CustomEventComponent {
  eventName = input('Custom Event');
  details = input('');
}
```

### Timeline Metadata Format

```typescript
interface TimelineEvent {
  component: any;    // Component class reference
  data: any;         // Data to pass to component
}

const metadata: TimelineEvent[] = [
  {
    component: KickOffComponent,
    data: { 
      direction: 'left', 
      teamName: 'Team A', 
      time: '00:00\'' 
    }
  },
  // ... more events
];
```

## 🎨 Styling Features

- **Responsive Design** - Works on desktop and mobile
- **Animations** - Smooth transitions and celebrations
- **Modern Gradient** - Purple gradient background
- **Interactive** - Hover effects and visual feedback
- **Dark Mode Ready** - Can be easily extended

## 🔑 Key Technical Concepts

### Dynamic Component Loading
```typescript
// Create component dynamically
const componentRef = this.viewContainerRef.createComponent(event.component);

// Pass data to component instance
Object.assign(componentRef.instance, event.data);
```

### Signals for State Management
```typescript
// Create a signal
timelineEvents = signal<TimelineEvent[]>([]);

// Use effect for reactivity
constructor() {
  effect(() => {
    const events = this.timelineEvents();
    if (events.length > 0) {
      this.renderDynamicComponents();
    }
  });
}

// Update signal
this.timelineEvents.set(newEvents);
```

### New Control Flow Syntax
```html
<!-- Old way: *ngIf -->
<!-- <div *ngIf="condition">Content</div> -->

<!-- New way: @if -->
@if (condition) {
  <div>Content</div>
}

<!-- Old way: *ngFor -->
<!-- <div *ngFor="let item of items">{{ item }}</div> -->

<!-- New way: @for -->
@for (item of items; let i = $index) {
  <div>{{ item }}</div>
}
```

### Input Signals
```typescript
// Old way: @Input()
// @Input() name: string = '';

// New way: input()
name = input('default value');
```

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
ng test --code-coverage
```

## 🔧 Configuration

### Change Theme
Edit `timeline.component.ts` styles section:
```scss
// Update gradient colors
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Customize Animations
Edit component styles for animation timings and effects.

### Add More Event Types
1. Create new component in `events/` folder
2. Add to timeline metadata
3. Update event interface if needed

## 📊 Performance Considerations

- **OnDemand Rendering** - Components rendered only when needed
- **Signal-based Reactivity** - Fine-grained change detection
- **Lazy Loading** - Events loaded dynamically
- **Memory Management** - Proper cleanup in `ngOnDestroy`

## 🎓 Learning Resources

- [Angular 17 Docs](https://angular.io/docs)
- [Standalone Components](https://angular.io/guide/standalone-components)
- [Angular Signals](https://angular.io/guide/signals)
- [Dynamic Components](https://angular.io/guide/dynamic-component-loader)

## 🐛 Known Limitations

- Requires Angular 17+
- Currently uses in-memory data (no backend)
- Supports WebGL browsers (animations)

## 🚢 Deployment

### Deploy to Vercel
```bash
npm run build
vercel
```

### Deploy to Netlify
```bash
npm run build
netlify deploy --prod --dir=dist/angular-timeline-demo
```

### Docker Deployment
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]
```

## 📄 License

MIT License - feel free to use this demo as a template for your projects.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new event components
- Improve animations
- Add more features
- Report bugs
- Suggest improvements

## 👨‍💻 Author

Created as a demonstration of modern Angular 17+ capabilities.

---

**Happy Coding!** ⚽🎯✨
