import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPortalComponent } from './account-portal.component';

describe('AccountPortalComponent', () => {
  let component: AccountPortalComponent;
  let fixture: ComponentFixture<AccountPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
