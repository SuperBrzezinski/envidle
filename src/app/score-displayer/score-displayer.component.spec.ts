import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDisplayerComponent } from './score-displayer.component';

describe('ScoreDisplayerComponent', () => {
  let component: ScoreDisplayerComponent;
  let fixture: ComponentFixture<ScoreDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
