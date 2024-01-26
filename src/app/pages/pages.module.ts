import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BottombarComponent } from '../shared/bottombar/bottombar.component';
import { ComponentsModule } from '../components/components.module';
import { DetailsBlogAndNewsComponent } from './details-blog-and-news/details-blog-and-news.component';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContentService } from '../core/services/content.service';
import { DetailsCoursesComponent } from './details-courses/details-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogNoticiasPostComponent } from './blog-noticias-post/blog-noticias-post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { OurStudentComponent } from './our-student/our-student.component';
import { FormsModule } from '@angular/forms';
import { LocaisComponent } from './locations/locais.component';
import { InstutcionalComponent } from './institutional/instutcional.component';
import { TrabalheConoscoComponent } from './work-with-us/trabalhe-conosco.component';





@NgModule({
  declarations: [
    HomeComponent,
    DetailsBlogAndNewsComponent,
    DetailsCoursesComponent,
    CoursesComponent,
    BlogNoticiasPostComponent,
    OurStudentComponent,
    LocaisComponent,
    InstutcionalComponent,
    TrabalheConoscoComponent,
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    BottombarComponent,
    FooterComponent,
    ComponentsModule,
    RouterModule,
    NgxPaginationModule,
    FormsModule,

  ],
  exports: [NavbarComponent]
})
export class PagesModule { }
