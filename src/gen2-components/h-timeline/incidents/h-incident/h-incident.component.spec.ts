import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HIncidentComponent } from './h-incident.component';

describe('HIncidentComponent', () => {
  let component: HIncidentComponent;
  let fixture: ComponentFixture<HIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HIncidentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
