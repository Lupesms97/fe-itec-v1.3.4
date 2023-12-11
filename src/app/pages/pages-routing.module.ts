import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsBlogAndNewsComponent } from './details-blog-and-news/details-blog-and-news.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path:'', redirectTo: '', pathMatch: 'full' },
  {path:'', component: HomeComponent},
  {path:'news', component: DetailsBlogAndNewsComponent},
  {path:'cursos', component:CursosComponent}
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
