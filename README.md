# Angular Dynamic Timeline Component Demo

A modern Angular 17+ demo showcasing dynamic component creation and rendering with a beautiful sports timeline interface.

## 🎯 Features

### Latest Angular Features Used
- **Standalone Components** - All components use the new standalone API
- **Signals** - Reactive state management using Angular signals
- **Effects** - Automatic reactivity with `effect()` API
- **Control Flow** - New `@if` and `@for` syntax (no *ngIf, *ngFor)
- **Input Signals** - Type-safe component inputs with `input()` function
- **Dependency Injection** - Modern `inject()` function
- **ViewContainerRef** - Dynamic component rendering
- **Component References** - Programmatic component instantiation

### Dynamic Rendering
- ✅ Dynamically load components based on metadata
- ✅ Pass data to dynamic components programmatically
- ✅ Add/remove timeline events at runtime
- ✅ Reactive updates using Signals
- ✅ Beautiful animations and transitions

### Components
- **TimelineComponent** - Main container managing dynamic rendering
- **KickOffComponent** - Match start event
- **GoalComponent** - Goal scoring event with assistant info
- **PenaltyComponent** - Penalty kick event
- **GameEndComponent** - Match conclusion event

## 📁 Project Structure

```
angular-timeline-demo/
├── app.component.ts          # Root component
├── main.ts                   # Bootstrap file
├── timeline.component.ts     # Main timeline container
├── events/                   # Dynamic event components
│   ├── kick-off.component.ts
│   ├── goal.component.ts
│   ├── penalty.component.ts
│   └── game-end.component.ts
├── index.html               # HTML template
├── styles.scss              # Global styles
├── package.json            # Dependencies
├── angular.json            # Angular config
├── tsconfig.json           # TypeScript config
└── README.md              # This file
```

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
npm start

# Navigate to http://localhost:4200/
```

### Build for Production

```bash
npm run build
```

Output will be in `dist/angular-timeline-demo/`

## 📝 Usage Example

### Adding a New Event Dynamically

```typescript
import { TimelineComponent } from './timeline.component';
import { GoalComponent } from './events/goal.component';

@Component({...})
export class AppComponent {
  @ViewChild(TimelineComponent) timeline!: TimelineComponent;

  addGoal() {
    this.timeline.addEvent(GoalComponent, {
      direction: 'left',
      teamName: 'Team A',
      scorer: 'New Player',
      assist: 'Helper Player',
      time: '50\''
    });
  }
}
```

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
