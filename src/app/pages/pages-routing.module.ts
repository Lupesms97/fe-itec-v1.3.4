import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsBlogAndNewsComponent } from './details-blog-and-news/details-blog-and-news.component';
import { DetailsCoursesComponent } from './details-courses/details-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogAndNewsComponent } from './blog-and-news/blog-and-news.component';

const routes: Routes = [
  { path:'', redirectTo: '', pathMatch: 'full' },
  {path:'', component: HomeComponent},
  {path:'conteudo/:id', component: DetailsBlogAndNewsComponent},
  {path:'cursos/:id', component: DetailsCoursesComponent},
  {path:'cursos', component: CoursesComponent},
  {path:'', component: CoursesComponent},
  {path: 'blog', component: BlogAndNewsComponent},
  {path: 'noticias', component: BlogAndNewsComponent},
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
