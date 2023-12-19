import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ContentI } from 'src/app/shared/models/ContentI';

@Component({
  selector: 'app-news-presentation',
  templateUrl: './news-presentation.component.html',
  styleUrls: ['./news-presentation.component.css']
})
export class NewsPresentationComponent {
  @Input() title: string = '';
  @Input() titleOnSpan: string = '';

  p: any = 0;

  @Input() news: ContentI[] = [];
  @Input() location:string = '';

  constructor(private router: Router) { }

  goToPost(id:string ) {
    this.router.navigate(['conteudo', id]);
  }


  goTo(location: string): void {
    this.router.navigate([location]);
  }

  transformImage(post: ContentI) {
    if (post.background) {
      return post.background;
    }
    return `/assets/fundo-blog-news.webp`;
  }
}
