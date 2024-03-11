import { Component, OnInit, inject } from '@angular/core';
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

  private contentService: ContentService = inject(ContentService);
  private router: Router = inject(Router);

  constructor(){
      this.getAndSetContent();
  }

  ngOnInit(): void {
    
    
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
  getBackgroundImage(post: ContentI):string {
    if(
      post.background==null || post.background==""
    ){
      return "assets/fundocards.jpg";
    }
    return post.background;
  }
}