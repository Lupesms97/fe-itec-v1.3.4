import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/app/components/components.module';



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
    NgxPaginationModule,ComponentsModule

  ]
})
export class ColaboradorModule { }
