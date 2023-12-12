import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ContentService } from 'src/app/core/content.service';
import { ContentI } from 'src/app/shared/models/ContentI';



@Component({
  selector: 'app-blog-presentation',
  templateUrl: './blog-presentation.component.html',
  styleUrls: ['./blog-presentation.component.css']
})
export class BlogPresentationComponent implements OnInit {
  blogs: ContentI[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getAndSetContent();
  }

  getAndSetContent() {
    this.contentService.contentBlog$.subscribe(posts => {
      this.blogs = posts;
    });
  }
}