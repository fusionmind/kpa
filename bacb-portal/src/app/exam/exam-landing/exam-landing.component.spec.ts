import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamLandingComponent } from './exam-landing.component';

describe('ExamLandingComponent', () => {
  let component: ExamLandingComponent;
  let fixture: ComponentFixture<ExamLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
