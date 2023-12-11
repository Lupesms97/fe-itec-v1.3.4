import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/shared/models/NewsI';

@Component({
  selector: 'app-news-presentation',
  templateUrl: './news-presentation.component.html',
  styleUrls: ['./news-presentation.component.css']
})
export class NewsPresentationComponent {
  @Input() title: string = '';
  @Input() titleOnSpan: string = '';



  @Input() news: News[] = [];

  constructor(private router: Router) { }

  goToPost(id:string ) {
    this.router.navigate(['news', id]);
  }



}
