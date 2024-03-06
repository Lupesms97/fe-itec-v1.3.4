import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ContentService } from 'src/app/core/services/content.service';
import { ContentI } from 'src/app/shared/models/ContentI';



@Component({
  selector: 'app-blog-presentation',
  templateUrl: './blog-presentation.component.html',
  styleUrls: ['./blog-presentation.component.css']
})
export class BlogPresentationComponent implements OnInit {
  blogs: ContentI[] = [];

  constructor(private contentService: ContentService,
    private router:Router){
    
  }

  ngOnInit(): void {
    this.contentService.refreshPosts();
    this.getAndSetContent();
    
  }

  getAndSetContent() {
    this.contentService.contentBlog$.subscribe(posts => {
      this.blogs = this.getSixPosts(posts);
    });
  }
  goToPost(id: string) {
    this.router.navigate(['conteudo', id]);
  }
  getSixPosts(posts: ContentI[]) {
    return posts.slice(0, 6);
  }
  goToPageWithAll() {
    this.router.navigate(['/blog']);
  }
}