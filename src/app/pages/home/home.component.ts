import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ContentService } from 'src/app/core/content.service';
import { ContentI } from 'src/app/shared/models/ContentI';
import { Testimonials } from 'src/app/shared/models/TestimonialsI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  news: ContentI[] = [];
  midia: ContentI[] = [];

  constructor(private router: Router, private contentService: ContentService) {}

  ngOnInit(): void {
    this.getAndSetValues();
  }

  getAndSetValues() {
    this.contentService.contentNews$.subscribe(posts => {
      this.news = posts;
    });

    this.contentService.contentPost$.subscribe(posts => {
      this.midia = posts;
    });
  }

  goToPost(id: string) {
    this.router.navigate(['content', id]);
  }


}
