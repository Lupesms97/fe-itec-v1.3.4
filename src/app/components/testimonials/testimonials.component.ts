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
      name: "Mariana Silva",
      titleTestimonial: "Excelente suporte acadêmico!",
      course: "Aluna",
      testimonial: "Estou muito satisfeita com o excelente suporte acadêmico oferecido pela instituição. Os professores são dedicados e o ambiente de aprendizado é incrível.",
      photo: "assets/mulher1.jpg"
    },
    {
      name: "Rodrigo Oliveira",
      titleTestimonial: "Preparação de alta qualidade",
      course: "Ex-aluno",
      testimonial: "A preparação fornecida pela instituição é de alta qualidade. Graças aos cursos oferecidos, estou bem preparado para enfrentar os desafios do mercado de trabalho.",
      photo: "assets/homem1.jpg"
    },
    {
      name: "Amanda Santos",
      titleTestimonial: "Comprometimento com o sucesso",
      course: "Aluna",
      testimonial: "Estou impressionada com o comprometimento da instituição com o sucesso dos alunos. Os professores são dedicados e o ambiente de aprendizado é inspirador.",
      photo: "assets/mulher2.jpg"
    },
    {
      name: "Lucas Pereira",
      titleTestimonial: "Transformador para a carreira",
      course: "Ex-aluno",
      testimonial: "A experiência na instituição foi transformadora para a minha carreira. Os cursos são relevantes e proporcionam uma base sólida para o desenvolvimento profissional.",
      photo: "assets/homem2.jpg"
    }
  ];
  
}
