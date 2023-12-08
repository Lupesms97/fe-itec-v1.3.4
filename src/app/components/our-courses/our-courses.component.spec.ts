import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoursesComponent } from './our-courses.component';

describe('OurCoursesComponent', () => {
  let component: OurCoursesComponent;
  let fixture: ComponentFixture<OurCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCoursesComponent]
    });
    fixture = TestBed.createComponent(OurCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
