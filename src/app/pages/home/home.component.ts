import { Component } from '@angular/core';
import { News } from 'src/app/shared/models/NewsI';
import { Testimonials } from 'src/app/shared/models/TestimonialsI';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  news: News[] = [
    {
      title: "Desenvolvimento Web",
      description: "Explore as últimas tendências e tecnologias no desenvolvimento web. Descubra dicas úteis para aprimorar suas habilidades como desenvolvedor.",
      background: "/assets/newsimg6.jpg"
    },
    {
      title: " Dicas de Carreira",
      description: "Obtenha conselhos práticos sobre como avançar em sua carreira. Descubra estratégias para alcançar o sucesso profissional e se destacar no mercado de trabalho.",
      background: "/assets/newsimg5.jpg"
    },
    {
      title: "A Arte da Produtividade",
      description: "Aprenda técnicas eficazes de gestão do tempo e produtividade. Descubra como organizar sua vida para alcançar seus objetivos pessoais e profissionais.",
      background: "/assets/newsimg4.jpg"
    },
    {
      title: "Explorando a Inteligência Artificial",
      description: "Mergulhe no fascinante mundo da inteligência artificial. Fique por dentro das últimas inovações, aplicações práticas e futuras tendências nesse campo em rápida evolução.",
      background: "/assets/newsimg3.jpg"
    },
    {
      title: "Destinos Imperdíveis ao Redor do Mundo",
      description: "Inspire-se com histórias de viagem emocionantes e descubra destinos imperdíveis ao redor do mundo. Encontre dicas práticas para planejar suas próximas aventuras.",
      background: "/assets/newsimg2.jpg"
    },
    {
      title: "Guia para uma Vida Saudável",
      description: "Receba orientações sobre nutrição, exercícios e bem-estar. Descubra como adotar hábitos saudáveis para uma vida equilibrada e cheia de vitalidade.",
      background: "/assets/newsimg1.jpg"
    }
  ]
  midia: News[] = [
    {
      title: "Desenvolvimento Web",
      description: "Explore as últimas tendências e tecnologias no desenvolvimento web. Descubra dicas úteis para aprimorar suas habilidades como desenvolvedor.",
      background: "/assets/mediaimg6.jpg"
    },
    {
      title: "Dicas de Carreira",
      description: "Obtenha conselhos práticos sobre como avançar em sua carreira. Descubra estratégias para alcançar o sucesso profissional e se destacar no mercado de trabalho.",
      background: "/assets/mediaimg5.jpg"
    },
    {
      title: "A Arte da Produtividade",
      description: "Aprenda técnicas eficazes de gestão do tempo e produtividade. Descubra como organizar sua vida para alcançar seus objetivos pessoais e profissionais.",
      background: "/assets/mediaimg4.jpg"
    },
    {
      title: "Explorando a Inteligência Artificial",
      description: "Mergulhe no fascinante mundo da inteligência artificial. Fique por dentro das últimas inovações, aplicações práticas e futuras tendências nesse campo em rápida evolução.",
      background: "/assets/mediaimg3.jpg"
    },
    {
      title: "Destinos Imperdíveis ao Redor do Mundo",
      description: "Inspire-se com histórias de viagem emocionantes e descubra destinos imperdíveis ao redor do mundo. Encontre dicas práticas para planejar suas próximas aventuras.",
      background: "/assets/mediaimg2.jpg"
    },
    {
      title: "Guia para uma Vida Saudável",
      description: "Receba orientações sobre nutrição, exercícios e bem-estar. Descubra como adotar hábitos saudáveis para uma vida equilibrada e cheia de vitalidade.",
      background: "/assets/mediaimg1.jpg"
    }
  ]
}
