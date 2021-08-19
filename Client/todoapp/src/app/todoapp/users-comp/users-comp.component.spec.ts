import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCompComponent } from './users-comp.component';

describe('UsersCompComponent', () => {
  let component: UsersCompComponent;
  let fixture: ComponentFixture<UsersCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
