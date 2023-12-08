import { Component } from '@angular/core';

@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.css']
})
export class OurCoursesComponent {
  cursosLivres: string[] = [];
  cursosEAD: string[] = [];
  cursosProfissionalizantes: string[] = [];
  cursosEnsinoSuperior: string[] = [];


  constructor() {
    this.cursosLivres = [
      "Arte Abstrata",
      "Desenvolvimento Web para Iniciantes",
      "Fotografia Digital",
      "Mindfulness e Bem-Estar",
      "Marketing Digital",
      "Empreendedorismo Social",
      "Inglês para Viagens"
    ];
    this.cursosEAD = [
      'Desenvolvimento Web',
      'Marketing Digital',
      'Design Gráfico',
      'Inglês Avançado',
      'Programação em Python',
      'Gestão de Recursos Humanos',
      'Machine Learning',
      'Arquitetura de Software',
    ];
    
    // Array de cursos Profissionalizantes
    this.cursosProfissionalizantes = [
      'Eletricista Residencial',
      'Assistente Administrativo',
      'Design de Moda',
      'Técnico em Enfermagem',
      'Culinária Internacional',
      'Web Design',
      'Marketing de Moda',
    ];
    
    // Array de cursos de Ensino Superior
    this.cursosEnsinoSuperior = [
      'Engenharia Civil',
      'Administração de Empresas',
      'Psicologia',
      'Medicina',
      'Ciência da Computação',
      'Direito',
      'Ciências Contábeis',
      'Publicidade e Propaganda',
      'Engenharia Elétrica',
    ];
  }



  activateTab(tabId: string): void {
    // Mapeia o ID da tab para a cor desejada
    const colorMap: { [key: string]: string } = {
      '#tab-1': ' #8dc9f2',
      '#tab-2': '#86d18f',
      '#tab-3': '#a76cad',
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
  
}
