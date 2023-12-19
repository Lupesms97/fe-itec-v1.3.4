import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  corDoBackground:string = "#2c61a3";

  constructor() { 
    window.scrollTo(0, 0);
  }
}
