import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Company } from 'src/app/shared/models/Company';
import { CoursesI } from 'src/app/shared/models/CoursesI';

@Component({
  selector: 'app-company-carousel',
  templateUrl: './company-carousel.component.html',
  styleUrls: ['./company-carousel.component.css']
})
export class CompanyCarouselComponent {
  companys: Company[] = [
    {
      companyName: "YES IDIOMAS",
      link: "https://api.whatsapp.com/send/?phone=552435123050&text=Eu+vim+atrav%C3%A9s+do+site+do+ITEC+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+o+curso+de+ingl%C3%AAs&type=phone_number&app_absent=0",
      text: "Com 50 anos de experiência, a YES! Idiomas promove aprendizado moderno de inglês e espanhol, incentivando a curiosidade, interação e ampliação de oportunidades culturais.",
      photo: "assets/yesok.png"
    },
    {
      companyName: "INSTITUTO GOURMET",
      link: "https://api.whatsapp.com/send/?phone=552499926775810&text=Eu+vim+atrav%C3%A9s+do+site+do+ITEC+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+de+culin%C3%A1ria&type=phone_number&app_absent=0",
      text: "Transformar a vida pessoal, profissional e financeira das pessoas, democratizando o acesso à educação gastronômica.",
      photo: "assets/ighi.png"
    },
    {
      companyName: "INTEGRADOR",
      link: "https://www.integrador.app/cadastre-se",
      text: "Facilitamos a conexão entre estudantes, empresas e escolas para trazer a você as melhores oportunidades de estágio para iniciar sua carreira.",
      photo: "assets/integradorok.png"
    },
    {
      companyName: "UNICESUMAR",
      link: "https://api.whatsapp.com/send/?phone=552435120103&text=Eu+vim+atrav%C3%A9s+do+site+do+ITEC+e+gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+os+cursos+de+culin%C3%A1ria&type=phone_number&app_absent=0",
      text: "A UniCesumar está entre 4% das melhores instituições do Brasil, com nota máxima no MEC. Com uma estrutura moderna e equipe de 80% de professores mestres e doutores.",
      photo: "assets/unicesumar.png"
    }
  ];


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

  closepane(){
    document.querySelectorAll('.tab-pane').forEach(function (pane) {
      pane.classList.remove('active');
    });

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
  navigateTo(link:string){
    window.open(link, '_blank');
  }
}
