import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { ContentI } from 'src/app/shared/models/ContentI';

@Component({
  selector: 'app-details-blog-and-news',
  templateUrl: './details-blog-and-news.component.html',
  styleUrls: ['./details-blog-and-news.component.css']
})
export class DetailsBlogAndNewsComponent implements OnInit {

  corDoBackground: string = "#2c61a3";

  post:ContentI = {
    id:'',
    title:'',
    background:'',
    tag:'',
    content:'',
    description:''
  }

  id: string='';


  constructor(private router: ActivatedRoute,
  private contentService:ContentService) {

  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    if(this.verifictionOdId(this.id)){
      this.contentService.getPostbyId(this.id).subscribe((post) => {
        this.post = post;
      });
    }
    window.scrollTo(0, 0);
    this.corDoBackground = this.setColor(this.post.tag);

  }


  verifictionOdId(id :string){
    if(id!==''){
      this.id = id;
      return true;
    }else{
      
      return false;
    }
  }

  setColor(tag:string){
    switch (tag) {
      case 'Blog':
        return '#2c61a3';
      case 'News':
        return '#c95f94';
      case 'Post':
        return '#5cb85c';
      default:
        return '#2c61a3';
    }
  }

}