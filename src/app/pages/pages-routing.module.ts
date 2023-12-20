import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsBlogAndNewsComponent } from './details-blog-and-news/details-blog-and-news.component';
import { DetailsCoursesComponent } from './details-courses/details-courses.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogNoticiasPostComponent } from './blog-noticias-post/blog-noticias-post.component';
import { OurStudentComponent } from './our-student/our-student.component';
import { LocaisComponent } from './locais/locais.component';

const routes: Routes = [
  { path:'', redirectTo: '', pathMatch: 'full' },
  {path:'', component: HomeComponent},
  {path:'conteudo/:id', component: DetailsBlogAndNewsComponent},
  {path:'cursos/:id', component: DetailsCoursesComponent},
  {path:'cursos', component: CoursesComponent},
  {path:'', component: CoursesComponent},
  {path: 'blog', component: BlogNoticiasPostComponent},
  {path: 'noticias', component: BlogNoticiasPostComponent},
  {path: 'posts', component: BlogNoticiasPostComponent},
  {path:'seja-nosso-aluno', component: OurStudentComponent},
  {path:'locais', component: LocaisComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
