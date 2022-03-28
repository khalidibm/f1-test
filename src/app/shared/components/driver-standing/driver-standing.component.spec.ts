import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverStandingComponent } from './driver-standing.component';

describe('DriverStandingComponent', () => {
  let component: DriverStandingComponent;
  let fixture: ComponentFixture<DriverStandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverStandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverStandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
