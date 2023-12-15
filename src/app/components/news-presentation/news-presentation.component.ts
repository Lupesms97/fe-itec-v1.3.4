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



  @Input() news: ContentI[] = [];

  constructor(private router: Router) { }

  goToPost(id:string ) {
    this.router.navigate(['conteudo', id]);
  }



}
