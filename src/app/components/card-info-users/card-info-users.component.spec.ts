import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoUsersComponent } from './card-info-users.component';

describe('CardInfoUsersComponent', () => {
  let component: CardInfoUsersComponent;
  let fixture: ComponentFixture<CardInfoUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInfoUsersComponent]
    });
    fixture = TestBed.createComponent(CardInfoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
