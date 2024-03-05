import { Component, Input } from '@angular/core';
import { Testimonials } from 'src/app/shared/models/TestimonialsI';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonials: Testimonials[] = [

    {
      name: "Sara",
      titleTestimonial: "Cuidado e atenção.",
      course: "Aluna",
      testimonial: "Meu interesse pela área da saúde vai além da arte do cuidar. Cuidar, do qual, a instituição nos fornece através dos professores,amigos e colaboradores.O cuidado em se atentar às necessidades que nós, estudantes, precisamos em nossa carreira e formação pessoal. O Itec, por si só, já carrega um grande nome, um verdadeiro 'coração de mãe'. Digo isso pois a minha inscrição foi feita através de indicações familiares, onde tais, já estão empregados na área. Cada dia que se passa, o meu amor pela enfermagem cresce. O técnico é a base, e apenas um trampolim para maiores sonhos. Eu Sara, te convido por meio dessas afirmações a vir fazer parte dessa equipe.",
      photo: "assets/Sara (1).jpeg"
    },
    {
      name: "Bruno Arruda",
      titleTestimonial: "Atendimento com excelência.",
      course: "Aluno",
      testimonial: "Conheci o Itec através da minha irmã, que se formou como técnica de enfermagem na instituição. Para eu escolher a escola em que começei a estudar não foi difícil assim, atendimento com excelência, cordialidade e clara… Escola super flexível para os alunos. Onde te escutam e te ajudam… desde a secretaria até a sala de aula… desde o porteiro até a diretora. Eu amo o curso que faço, estou cada dia mais apaixonado na profissão, os professores nos deixam apaixonados pela vivência que nos contam… a realidade… e a sabedoria. Sem dúvida indico o Itec para todos.",
      photo: "assets/brunoArruda (1).jpeg"
    },
    {
      name: "Geisiane Belmiro",
      titleTestimonial: "Professores que me inspiram.",
      course: "Aluna",
      testimonial: " Desde então escolhi fazer o Técnico em Enfermagem, e o ITEC foi uma instituição que me abriu as portas, de braços abertos. Passei por um momento em minha vida, onde precisei passar por uma séria cirurgia, e tive um grande acolhimento por toda a instituição e sala de aula. Nesta Instituição conheci Professores que sempre nos ensinam, que nós futuros Técnicos de Enfermagem, precisamos ser para os nossos futuros pacientes, sermos excelentes profissionais, e além de tudo, gostar, amar o que vamos nos tornar. ",
      photo: "assets/Geisiane.jpeg"
    }
  ];
  
}
