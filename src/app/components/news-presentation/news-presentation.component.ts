import { Component, Input } from '@angular/core';
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

}
