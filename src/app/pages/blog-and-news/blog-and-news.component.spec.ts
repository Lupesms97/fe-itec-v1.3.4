import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAndNewsComponent } from './blog-and-news.component';

describe('BlogAndNewsComponent', () => {
  let component: BlogAndNewsComponent;
  let fixture: ComponentFixture<BlogAndNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAndNewsComponent]
    });
    fixture = TestBed.createComponent(BlogAndNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
