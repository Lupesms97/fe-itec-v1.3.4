import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path:'', component: HomeComponent},
        {path:'home', component: HomeComponent}
      ]
    ),
    NgxPaginationModule

  ]
})
export class ColaboradorModule { }
