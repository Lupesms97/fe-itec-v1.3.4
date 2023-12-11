import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-blog-and-news',
  templateUrl: './details-blog-and-news.component.html',
  styleUrls: ['./details-blog-and-news.component.css']
})
export class DetailsBlogAndNewsComponent implements OnInit {
  postId: string='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }
}