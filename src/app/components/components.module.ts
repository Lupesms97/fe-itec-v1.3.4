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
import { NgxPaginationModule } from 'ngx-pagination';
import { PrizeDrawComponent } from './prize-draw/prize-draw.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CardInfoUsersComponent } from './card-info-users/card-info-users.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    OurCoursesComponent,
    FormsComponent,
    CountersComponent,
    TestimonialsComponent,
    BlogPresentationComponent,
    NewsPresentationComponent,
    PrizeDrawComponent,
    MapComponent,
    CardInfoUsersComponent,

  ],
  imports: [
    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PagesRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    GoogleMapsModule,
  ],
  exports:[
    OurCoursesComponent,
    FormsComponent,
    CountersComponent,
    TestimonialsComponent,
    BlogPresentationComponent,
    NewsPresentationComponent,
    PrizeDrawComponent,
    MapComponent,CardInfoUsersComponent
  ]
})
export class ComponentsModule { }
