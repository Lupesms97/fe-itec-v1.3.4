import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BottombarComponent } from '../shared/bottombar/bottombar.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavbarComponent,
    BottombarComponent,
    ComponentsModule
  ],
  exports: [NavbarComponent]
})
export class PagesModule { }
