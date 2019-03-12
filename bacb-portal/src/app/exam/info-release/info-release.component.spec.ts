import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReleaseComponent } from './info-release.component';

describe('InfoReleaseComponent', () => {
  let component: InfoReleaseComponent;
  let fixture: ComponentFixture<InfoReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
