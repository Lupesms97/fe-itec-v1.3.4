import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPresentationComponent } from './news-presentation.component';

describe('NewsPresentationComponent', () => {
  let component: NewsPresentationComponent;
  let fixture: ComponentFixture<NewsPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsPresentationComponent]
    });
    fixture = TestBed.createComponent(NewsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
