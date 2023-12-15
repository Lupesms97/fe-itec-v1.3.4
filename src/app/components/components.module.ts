import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurCoursesComponent } from './our-courses/our-courses.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountersComponent } from './counters/counters.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogPresentationComponent } from './blog-presentation/blog-presentation.component';
import { NewsPresentationComponent } from './news-presentation/news-presentation.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    OurCoursesComponent,
    FormsComponent,
    CountersComponent,
    TestimonialsComponent,
    BlogPresentationComponent,
    NewsPresentationComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PagesRoutingModule,
    HttpClientModule
  ],
  exports:[
    OurCoursesComponent,
    FormsComponent,
    CountersComponent,
    TestimonialsComponent,
    BlogPresentationComponent,
    NewsPresentationComponent,

  ]
})
export class ComponentsModule { }
