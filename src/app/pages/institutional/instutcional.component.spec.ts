import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstutcionalComponent } from './instutcional.component';

describe('InstutcionalComponent', () => {
  let component: InstutcionalComponent;
  let fixture: ComponentFixture<InstutcionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstutcionalComponent]
    });
    fixture = TestBed.createComponent(InstutcionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
