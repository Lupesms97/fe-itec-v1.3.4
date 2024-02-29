import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { ContentI } from 'src/app/shared/models/ContentI';

declare const Isotope: any;
declare const select: any;
declare const on: any;
declare const AOS: any;

@Component({
  selector: 'app-our-structure',
  templateUrl: './our-structure.component.html',
  styleUrls: ['./our-structure.component.css']
})
export class OurStructureComponent implements OnInit {
  blogs: ContentI[] = [];

  constructor(private contentService: ContentService,
    private router:Router) {}

  ngOnInit(): void {
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