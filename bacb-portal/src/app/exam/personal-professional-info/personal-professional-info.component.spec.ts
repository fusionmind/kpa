import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProfessionalInfoComponent } from './personal-professional-info.component';

describe('PersonalProfessionalInfoComponent', () => {
  let component: PersonalProfessionalInfoComponent;
  let fixture: ComponentFixture<PersonalProfessionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalProfessionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProfessionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
