import { Component } from '@angular/core';
import { Company } from 'src/app/shared/models/Company';

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



  navigateTo(link:string){
    window.open(link, '_blank');
  }
}
