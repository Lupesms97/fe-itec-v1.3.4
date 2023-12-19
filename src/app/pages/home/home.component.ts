import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ContentService } from 'src/app/core/services/content.service';
import { FormsService } from 'src/app/core/services/forms.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ContentI } from 'src/app/shared/models/ContentI';
import { Testimonials } from 'src/app/shared/models/TestimonialsI';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string = '';
  news: ContentI[] = [];
  midia: ContentI[] = [];

  constructor(
    private router: Router,
    private contentService: ContentService,
    private formsService:FormsService,
    private notification:NotificationService
      ) {}

  ngOnInit(): void {
    this.getAndSetValues();

  }

  getAndSetValues() {
    this.contentService.contentNews$.subscribe(posts => {
      this.news = this.getSixPosts(posts);
    });
    
    this.contentService.contentPost$.subscribe(posts => {
      this.midia = this.getSixPosts(posts);
    });
  }

  getSixPosts(posts: ContentI[]) {
    return posts.slice(0, 6);
  }

  goToPost(id: string) {
    this.router.navigate(['conteudo', id]);
  }


  onSubmit() {
    this.formsService.sendEmail(this.email).subscribe(
    (res) => {
      this.notification.showToast(TypeToast.Success,'Sucesso', 'E-mail cadastrado com sucesso!');
    },
    (err) => {
      this.notification.showToast(TypeToast.Error,'Error','Não Foi possivel cadastra seu email no momento!' );
    }
    );
    console.log('E-mail capturado:', this.email);
  }
}
