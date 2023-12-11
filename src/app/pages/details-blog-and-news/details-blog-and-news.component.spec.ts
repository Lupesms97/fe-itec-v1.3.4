import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBlogAndNewsComponent } from './details-blog-and-news.component';

describe('DetailsBlogAndNewsComponent', () => {
  let component: DetailsBlogAndNewsComponent;
  let fixture: ComponentFixture<DetailsBlogAndNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBlogAndNewsComponent]
    });
    fixture = TestBed.createComponent(DetailsBlogAndNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
