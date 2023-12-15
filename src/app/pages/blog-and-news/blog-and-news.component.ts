import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/core/content.service';
import { CoursesService } from 'src/app/core/courses.service';
import { ContentI } from 'src/app/shared/models/ContentI';

@Component({
  selector: 'app-blog-and-news',
  templateUrl: './blog-and-news.component.html',
  styleUrls: ['./blog-and-news.component.css']
})
export class BlogAndNewsComponent implements OnInit{
  post:ContentI = {
    id:'',
    title:'',
    background:'',
    tag:'',
    content:'',
    description:''
  }
  corDoBackground:string = "#86D18F";
  title:string = '';
  param: string = '';
  noticiaParam: string = '';
  postsLoaded: boolean = false;
  posts: ContentI[] = [];
  unloadPosts: ContentI[] = [];


  constructor(private router: Router, private contentService:ContentService) {
    this.param = this.contentService.getTypeParameterOwner();
    console.log(this.param);
    console.log(this.getListOfPosts())
    this.getListOfPosts();
    for (let i = 0; i < 6; i++) {
      this.unloadPosts.push(this.post);
    }
    
   }



  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.corDoBackground = this.setColor(this.param);
    console.log(this.param);
    console.log(this.posts);
  
  }
  getListOfBlog() {
    this.contentService.contentBlog$.subscribe(posts => {
      this.posts = posts;
    });
  }

/*   getListOfPosts() {
    switch (this.param) {
      case '/blog':
        console.log('entrou no blog');
        this.contentService.contentBlog$.subscribe(posts => {
          this.posts = posts;
        });
        this.postsLoaded= true;
        this.title = "Blog";
        break;
      case '/noticias':
        console.log('entrou no noticias');
        this.contentService.contentNews$.subscribe(posts => {
          this.posts = posts;
        });
        this.postsLoaded= true;
        this.title = "Notícias";
        break;
      default:
        console.log('entrou no default');
        this.postsLoaded = false;
        this.title = "Blog e Notícias";
        break;
    }
  } */

  refresh() {
    window.location.reload();
  }


  setColor(tag:string){
    switch (tag) {
      case '/blog':
        return '#2c61a3';
      case '/noticias':
        return '#5cb85c';
      default:
        return '#0275E8';
    }
  }


  goToPost(id: string) {
    this.router.navigate(['conteudo', id]);
  }
}
