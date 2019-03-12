import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonProfessionalCredComponent } from './non-professional-cred.component';

describe('NonProfessionalCredComponent', () => {
  let component: NonProfessionalCredComponent;
  let fixture: ComponentFixture<NonProfessionalCredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonProfessionalCredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonProfessionalCredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
