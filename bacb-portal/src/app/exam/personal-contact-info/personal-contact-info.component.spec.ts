import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContactInfoComponent } from './personal-contact-info.component';

describe('PersonalContactInfoComponent', () => {
  let component: PersonalContactInfoComponent;
  let fixture: ComponentFixture<PersonalContactInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalContactInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
