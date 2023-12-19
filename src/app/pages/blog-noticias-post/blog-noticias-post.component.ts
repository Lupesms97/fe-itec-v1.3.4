import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/core/services/content.service';
import { ContentI } from 'src/app/shared/models/ContentI';

@Component({
  selector: 'app-blog-noticias-post',
  templateUrl: './blog-noticias-post.component.html',
  styleUrls: ['./blog-noticias-post.component.css']
})
export class BlogNoticiasPostComponent implements OnInit{
  post:ContentI = {
    id:'',
    title:'',
    background:'/assets/fundo-blog-news.webp',
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
  leftPosts: ContentI[] = [];
  rightPosts: ContentI[] = [];
  p:number = 0;

  constructor(private router: Router, private contentService:ContentService) {
    this.param = this.contentService.getTypeParameterOwner();
    console.log(this.param);

    let returnOfParam : string = this.getListOfPosts();

    if(returnOfParam == 'posts'){
      this.getListOfPost();
    }else if(returnOfParam == 'noticias'){
      this.getListOfNews();
    }else if(returnOfParam == 'blog'){
      this.getListOfBlog();
    }else{
      this.refresh();
    }

    
    for (let i = 0; i < 6; i++) {
      this.unloadPosts.push(this.post);
    }
    
    window.scrollTo(0, 0);
   }



  ngOnInit(): void {
    this.corDoBackground = this.setColor(this.param);
    
  }
  getListOfPost() {
    this.contentService.contentPost$.subscribe(posts => {
      this.posts = posts.map(post => ({
        ...post,
        background: post.background || "/assets/sucessoIcone.png"
      }));
    });
  }
 
  getListOfNews() {
    this.contentService.contentNews$.subscribe(posts => {
         this.posts = posts;
  });
  }
  getListOfBlog(){
    this.contentService.contentBlog$.subscribe(posts => {
      this.posts = posts.map(post => ({
        ...post,
        background: post.background || "assets/fundocards.jpg"
      }));
    });
  }


  setLeftAndRightPosts(){
    let i = 0;
    this.posts.forEach(post => {
      if(i%2 == 0){
        this.leftPosts.push(post);
      }else{
        this.rightPosts.push(post);
      }
      i++;
    });
  }


  transformImage(post: ContentI) {
    if (post.background) {
      return post.background;
    }
    return `/assets/fundo-blog-news.webp`;
  }


  getListOfPosts():string{
    if(this.param == '/blog'){
      this.title = "Blog";
      return 'blog'
      
    }else if(this.param == '/noticias'){
      this.title = "Notícias";
      return 'noticias'
      
    }else if(this.param == '/posts'){
      this.title = "Posts";
      return 'posts'
      
    }else{
      this.postsLoaded = false;
      this.title = "Blog e Notícias";
      return 'blog e noticias'
      
    }

  }

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
