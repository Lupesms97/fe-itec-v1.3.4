import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsService } from 'src/app/core/services/forms.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FormsI } from 'src/app/shared/models/FormsI';
import { TypeToast } from 'src/app/shared/models/TypeToastE';


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
  @Input()  text2: string = '';
  @Input()  buttonText: string = '';
  @Input()  showCourses: boolean = true;
  @Input()  formsAside: boolean = false;
  @Input() poloOnAside: boolean = true;
  public processingOrder: boolean = false;

  forms:FormsI = {
    name: '',
    email: '',
    polo: '',
    celphone: '',
    course: '',
    cupom: '',

  }

  constructor(private formsService:FormsService,private notification:NotificationService) { }

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

  public processOrder() {
    this.processingOrder = !this.processingOrder;

  }
  onSubmit(forms:NgForm){
      this.formsService.send(forms.value).subscribe(
      response => {        
        this.processOrder();
        this.notification.showToast(TypeToast.Success,'Sucesso','Formulário enviado com sucesso');
        forms.reset();
      },
      error => {
        this.processOrder();
        this.notification.showToast(TypeToast.Error,'Erro','Não foi possivel enviar o formulário no momento');
      }
    )};
  }


  



