import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/core/content.service';
import { ContentI } from 'src/app/shared/models/ContentI';

@Component({
  selector: 'app-details-blog-and-news',
  templateUrl: './details-blog-and-news.component.html',
  styleUrls: ['./details-blog-and-news.component.css']
})
export class DetailsBlogAndNewsComponent implements OnInit {

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

  }
  verifictionOdId(id :string){
    if(id!==''){
      this.id = id;
      return true;
    }else{
      
      return false;
    }

  }

}