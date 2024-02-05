import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCarouselComponent } from './company-carousel.component';

describe('CompanyCarouselComponent', () => {
  let component: CompanyCarouselComponent;
  let fixture: ComponentFixture<CompanyCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCarouselComponent]
    });
    fixture = TestBed.createComponent(CompanyCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
