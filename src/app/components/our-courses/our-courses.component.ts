import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesI } from 'src/app/shared/models/CoursesI';

@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.css']
})
export class OurCoursesComponent {
  cursosLivres: CoursesI[] = [];
  cursosEAD: CoursesI[] = [];
  cursosProfissionalizantes: CoursesI[] = [];
  cursosEnsinoSuperior: CoursesI[] = [];


  constructor(private router:Router,
    private coursesService: CoursesService) {
      this.getAndSetValues();
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

  getAndSetValues() {
    this.coursesService.cursosESuperior$.subscribe(posts => {
      this.cursosEnsinoSuperior = posts;
    });

    this.coursesService.cursosEad$.subscribe(posts => {
      this.cursosEAD = posts;
    });

    this.coursesService.cursosProfissonalizante$.subscribe(posts => {
      this.cursosProfissionalizantes = posts;
    });

    this.coursesService.cursosCursosLivres$.subscribe(posts => {
      this.cursosLivres = posts;
    });
  }

  goToPost(id: string) {
    this.router.navigate(['cursos', id]);
  }
}
