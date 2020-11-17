import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaromPanelComponent } from './harom-panel.component';

describe('HaromPanelComponent', () => {
  let component: HaromPanelComponent;
  let fixture: ComponentFixture<HaromPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaromPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaromPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
