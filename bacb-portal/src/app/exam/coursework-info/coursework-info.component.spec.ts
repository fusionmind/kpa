import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseworkInfoComponent } from './coursework-info.component';

describe('CourseworkInfoComponent', () => {
  let component: CourseworkInfoComponent;
  let fixture: ComponentFixture<CourseworkInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseworkInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseworkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
