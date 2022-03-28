import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeasonFilterPipe } from 'src/app/shared/pipes/season-filter.pipe';

import { SeasonDropDownComponent } from './season-dropdown.component';

describe('SeasonDropDownComponent', () => {
  let component: SeasonDropDownComponent;
  let fixture: ComponentFixture<SeasonDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonDropDownComponent, SeasonFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
