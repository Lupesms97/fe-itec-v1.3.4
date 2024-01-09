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
        {path:'', redirectTo: 'home', pathMatch: 'full'},
        {path:'home', component: HomeComponent}
      ]
    ),
    NgxPaginationModule

  ]
})
export class ColaboradorModule { }
