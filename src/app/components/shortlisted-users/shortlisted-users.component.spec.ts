import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedUsersComponent } from './shortlisted-users.component';

describe('ShortlistedUsersComponent', () => {
  let component: ShortlistedUsersComponent;
  let fixture: ComponentFixture<ShortlistedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
