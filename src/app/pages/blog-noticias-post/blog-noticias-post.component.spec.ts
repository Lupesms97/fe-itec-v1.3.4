import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNoticiasPostComponent } from './blog-noticias-post.component';

describe('BlogNoticiasPostComponent', () => {
  let component: BlogNoticiasPostComponent;
  let fixture: ComponentFixture<BlogNoticiasPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogNoticiasPostComponent]
    });
    fixture = TestBed.createComponent(BlogNoticiasPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
