import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContentService } from './services/content.service';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  exports:[
    
  ]
})
export class CoreModule { }
