import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesI } from 'src/app/shared/models/CoursesI';
import { DetailsCoursesTitles } from 'src/app/shared/models/DetailsCourseTitlesI';
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
  courseTag = ''
  titles : DetailsCoursesTitles = {
    firstTitle : 'Sobre',
    secondTitle : 'Mercado de trabalho'
  }
  
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
    this.haveAvgSalary();
    this.corDoBackground = this.setColor(this.course.tag);
    window.scrollTo(0, 0);
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
    if(this.course.avgSalary!){
      return true;
    }
    return false;
  }

  setColor(tag:string){
    switch (tag) {
      case 'Livre':
        this.titles.firstTitle = 'Sobre'
        this.titles.secondTitle = 'Mercado de trabalho'
        this.courseTag = tag
        return '#86D18F';
      case 'Escola':
        this.titles.firstTitle = 'Sobre a Escola'
        this.titles.secondTitle = 'Nossa metodologia'
        this.courseTag = tag
        return '#0275E8';
      case 'Técnico':
        this.titles.firstTitle = 'Sobre'
        this.titles.secondTitle = 'Mercado de trabalho'
        this.courseTag = tag
        return '#2c61a3';
      case 'ITEC Pro':
        this.titles.firstTitle = 'Sobre'
        this.titles.secondTitle = 'Mercado de trabalho'
        this.courseTag = tag
          return '#f75ed4';
      default:
        this.titles.firstTitle = 'Sobre'
        this.titles.secondTitle = 'Mercado de trabalho'
        this.courseTag = tag
        return '#2c61a3';
    }
  }




}