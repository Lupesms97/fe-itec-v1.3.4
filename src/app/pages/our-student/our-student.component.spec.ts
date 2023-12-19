import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStudentComponent } from './our-student.component';

describe('OurStudentComponent', () => {
  let component: OurStudentComponent;
  let fixture: ComponentFixture<OurStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurStudentComponent]
    });
    fixture = TestBed.createComponent(OurStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
