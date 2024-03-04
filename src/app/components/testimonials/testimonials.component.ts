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
      name: "Bruno Arruda",
      titleTestimonial: "Atendimento com excelência",
      course: "Aluno",
      testimonial: "Conheci o Itec através da minha irmã, que se formou como técnica de enfermagem na instituição. Para eu escolher a escola em que começei a estudar não foi difícil assim, atendimento com excelência, cordialidade e clara… Escola super flexível para os alunos. Onde te escutam e te ajudam… desde a secretaria até a sala de aula… desde o porteiro até a diretora. Eu amo o curso que faço, estou cada dia mais apaixonado na profissão, os professores nos deixam apaixonados pela vivência que nos contam… a realidade… e a sabedoria. Sem dúvida indico o Itec para todos.",
      photo: "assets/brunoArruda (1).jpeg"
    },
    {
      name: "Rodrigo Oliveira",
      titleTestimonial: "Preparação de alta qualidade",
      course: "Ex-aluno",
      testimonial: "A preparação fornecida pela instituição é de alta qualidade. Graças aos cursos oferecidos, estou bem preparado para enfrentar os desafios do mercado de trabalho.",
      photo: "assets/homem1.webp"
    },
    {
      name: "Amanda Santos",
      titleTestimonial: "Comprometimento com o sucesso",
      course: "Aluna",
      testimonial: "Estou impressionada com o comprometimento da instituição com o sucesso dos alunos. Os professores são dedicados e o ambiente de aprendizado é inspirador.",
      photo: "assets/mulher2.webp"
    },
    {
      name: "Lucas Pereira",
      titleTestimonial: "Transformador para a carreira",
      course: "Ex-aluno",
      testimonial: "A experiência na instituição foi transformadora para a minha carreira. Os cursos são relevantes e proporcionam uma base sólida para o desenvolvimento profissional.",
      photo: "assets/homem2.webp"
    }
  ];
  
}
