import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesI } from 'src/app/shared/models/CoursesI';
import { Info } from 'src/app/shared/models/InfoI';

@Component({
  selector: 'app-details-courses',
  templateUrl: './details-courses.component.html',
  styleUrls: ['./details-courses.component.css']
})
export class DetailsCoursesComponent implements OnInit {
  id: string='';
  infosModules: Info[] = [];
  corDoBackground: string = "#2c61a3";
  show:boolean = false;
  course:CoursesI = {
    id :'',
    title:'',
    about:'',
    areaOfExpertise:'',
    content: [],
    hours:0,
    duration:'',
    avgSalary:0,
    tag:''

  }

  constructor(private router: ActivatedRoute,
  private courseService:CoursesService) {


  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    });
    if(this.verifictionOdId(this.id)){
      this.courseService.getPostbyId(this.id).subscribe((post) => {
        this.course = post;
      });
    }
    window.scrollTo(0, 0);
    this.corDoBackground = this.setColor(this.course.tag);
    this.haveAvgSalary();
  }


  verifictionOdId(id :string){
    if(id!==''){
      this.id = id;
      return true;
    }else{
      
      return false;
    }
  }

  haveAvgSalary(): boolean{
    if(this.course.avgSalary){
      return true;
    }
    return false;
  }

  setColor(tag:string){
    switch (tag) {
      case 'Especialização':
        return '#86D18F';
      case 'Escola':
        return '#0275E8';
      case 'Técnico':
        return '#2c61a3';
      case 'ITEC Pro ':
          return '#f75ed4';
      default:
        return '#2c61a3';
    }
  }


}