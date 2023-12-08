import { Component } from '@angular/core';
import { News } from 'src/app/shared/models/NewsI';



@Component({
  selector: 'app-blog-presentation',
  templateUrl: './blog-presentation.component.html',
  styleUrls: ['./blog-presentation.component.css']
})
export class BlogPresentationComponent {
  blogs: News[] = [
    {
      title: "Desvendando o Mundo do Desenvolvimento Web",
      description: "Explore as últimas tendências e tecnologias no desenvolvimento web. Descubra dicas úteis para aprimorar suas habilidades como desenvolvedor.",
      background: "assets/Banner Instrumentação Cirúrgica.png"
    },
    {
      title: "O Caminho para o Sucesso Profissional: Dicas de Carreira",
      description: "Obtenha conselhos práticos sobre como avançar em sua carreira. Descubra estratégias para alcançar o sucesso profissional e se destacar no mercado de trabalho."
    },
    {
      title: "A Arte da Produtividade: Maximize Seu Tempo e Realize Mais",
      description: "Aprenda técnicas eficazes de gestão do tempo e produtividade. Descubra como organizar sua vida para alcançar seus objetivos pessoais e profissionais."
    },
    {
      title: "Explorando o Universo da Inteligência Artificial",
      description: "Mergulhe no fascinante mundo da inteligência artificial. Fique por dentro das últimas inovações, aplicações práticas e futuras tendências nesse campo em rápida evolução."
    },
    {
      title: "Dicas de Viagem: Destinos Imperdíveis ao Redor do Mundo",
      description: "Inspire-se com histórias de viagem emocionantes e descubra destinos imperdíveis ao redor do mundo. Encontre dicas práticas para planejar suas próximas aventuras."
    },
    {
      title: "Nutrição e Bem-Estar: Guia para uma Vida Saudável",
      description: "Receba orientações sobre nutrição, exercícios e bem-estar. Descubra como adotar hábitos saudáveis para uma vida equilibrada e cheia de vitalidade."
    }
  ];
}
