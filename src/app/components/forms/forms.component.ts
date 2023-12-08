import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Input() img: string ='';
  @Input() orderForms: string = '';
  @Input() orderImage: string = '';
  @Input() spanTitle: string = '';
  @Input()  title: string = '';
  @Input()  text: string = '';
  @Input()  buttonText: string = '';
  @Input()  buttonLink: string = '';
  @Input()  showCourses: boolean = true;

  cursos:string[] = [
    'Engenharia Civil',
    'Administração de Empresas',
    'Psicologia',
    'Medicina',
    'Ciência da Computação',
    'Direito',
    'Ciências Contábeis',
    'Publicidade e Propaganda',
    'Engenharia Elétrica',
    'Eletricista Residencial',
    'Assistente Administrativo',
    'Design de Moda',
    'Técnico em Enfermagem',
    'Culinária Internacional',
    'Web Design',
    'Marketing de Moda',
    'Desenvolvimento Web',
    'Marketing Digital',
    'Design Gráfico',
    'Inglês Avançado',
    'Programação em Python',
    'Gestão de Recursos Humanos',
    'Machine Learning',
    'Arquitetura de Software',
    "Arte Abstrata",
    "Desenvolvimento Web para Iniciantes",
    "Fotografia Digital",
    "Mindfulness e Bem-Estar",
    "Marketing Digital",
    "Empreendedorismo Social",
    "Inglês para Viagens"
  ];

  criar(forms:NgForm){

  }


}
