import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesI } from 'src/app/shared/models/CoursesI';

@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.css']
})
export class OurCoursesComponent {
  cursosTecnico: CoursesI[] = [];
  cursosLivres: CoursesI[] = [];
  cursosProfissionalizantes: CoursesI[] = [];
  cursosEscola: CoursesI[] = [];
  viewCursoTecnico =   new BehaviorSubject<CoursesI[]>([]);
  showOtherButton = new BehaviorSubject<boolean>(false);



  constructor(private router:Router,
    private coursesService: CoursesService) {
      this.getAndSetValues();
      this.coursesService.refreshPosts();

  }



  activateTab(tabId: string): void {
    // Mapeia o ID da tab para a cor desejada
    const colorMap: { [key: string]: string } = {
      '#tab-1': ' #2c61a3',
      '#tab-2': '#86d18f',
      '#tab-3': '#f75ed4',
      '#tab-4': '#0275e8'
    };
  
    // Remove a classe 'active' de todos os panes
    document.querySelectorAll('.tab-pane').forEach(function (pane) {
      pane.classList.remove('active');
    });

    // Verifica se o elemento existe antes de adicionar a classe 'active'
    const tabElement = document.querySelector(tabId) as HTMLElement;
    if (tabElement) {
      tabElement.classList.add('active');

      // Define a cor de fundo com base no ID da tab
      const color = colorMap[tabId];
      const elementTitle = document.querySelector('.color-background') as HTMLElement;
      
      if (color && elementTitle) {
        elementTitle.style.backgroundColor = color;
      }
      
    }
  }
  limitCoursesForHomepage(): void {
    // Verifica se está na homepage
      
    if (this.getRouter() === '/cursos') {
      this.viewCursoTecnico.next(this.cursosProfissionalizantes);
      this.showOtherButton.next(false);
;
    }else{
      this.viewCursoTecnico.next(this.cursosProfissionalizantes.slice(0, 7));
      this.showOtherButton.next(true)
    }

  }
  


  getAndSetValues() {
    this.coursesService.cursosEscola$.subscribe(posts => {
      this.cursosEscola = posts;
    });

    this.coursesService.cursosLivres$.subscribe(posts => {
      this.cursosLivres = posts;
    });

    this.coursesService.cursosProfissionalizante$.subscribe(posts => {
      this.cursosProfissionalizantes = posts;
      this.limitCoursesForHomepage();
    });

    this.coursesService.cursosTecnico$.subscribe(posts => {
      this.cursosTecnico = posts;
       // Chama o método ao receber novos cursos
    });
  }

  goToPost(id: string) {
    this.router.navigate(['cursos', id]);
  }

  goToCourses() {
    this.router.navigate(['cursos']);
  }
  
  getRouter(){
    
    return this.router.url;
  }
}
