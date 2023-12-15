import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BottombarComponent } from '../shared/bottombar/bottombar.component';
import { ComponentsModule } from '../components/components.module';
import { DetailsBlogAndNewsComponent } from './details-blog-and-news/details-blog-and-news.component';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContentService } from '../core/content.service';
import { DetailsCoursesComponent } from './details-courses/details-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogAndNewsComponent } from './blog-and-news/blog-and-news.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsBlogAndNewsComponent,
    DetailsCoursesComponent,
    CoursesComponent,
    BlogAndNewsComponent,
    
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    BottombarComponent,
    FooterComponent,
    ComponentsModule,
    RouterModule,
    
  ],
  exports: [NavbarComponent]
})
export class PagesModule { }
