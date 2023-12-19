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
  post:CoursesI = {
      id: '',
      tag: '',
      title: '',
      about: '',
      market: '',
      hours: '',
      avgSalary: 0,
      modules: [], // Correção: modules é um objeto, não um array
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
        this.post = post;
      });
    }
    window.scrollTo(0, 0);
    this.corDoBackground = this.setColor(this.post.tag);

  }


  verifictionOdId(id :string){
    if(id!==''){
      this.id = id;
      return true;
    }else{
      
      return false;
    }
  }

  setColor(tag:string){
    switch (tag) {
      case 'EAD':
        return '#86D18F';
      case 'Ensino Superior':
        return '#0275E8';
      case 'Cursos Livres':
        return '#2c61a3';
      case 'Profissionalizantes':
          return '#f75ed4';
      default:
        return '#2c61a3';
    }
  }


}