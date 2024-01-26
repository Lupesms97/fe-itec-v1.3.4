import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from 'src/app/core/services/courses.service';
import { FormsService } from 'src/app/core/services/forms.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CoursesI } from 'src/app/shared/models/CoursesI';
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
  public processingForms: boolean = false;

  cursosTecnico: CoursesI[] = [];
  cursosEspecializacao: CoursesI[] = [];
  cursosProfissionalizantes: CoursesI[] = [];
  cursosEscola: CoursesI[] = [];

  forms:FormsI = {
    name: '',
    email: '',
    polo: '',
    phone: '',
    course: '',
    cupom: '',
    emailMarketing: false
  }

  constructor(private formsService:FormsService,private notification:NotificationService, private coursesService: CoursesService) {
    
   }


  cursoPorCidade = {
    "VR-Vila": []
  }

  cursos:string[] = [
   
  ];

  processForms() {
    this.processingForms = true;

  }
  public unprocessForms(type:TypeToast, titleInfo:string, messageInfo:string) {
    setTimeout(() => {
      this.processingForms = false;
      this.notification.showToast(type,titleInfo, messageInfo);
    }, 2000);
  }

  onSubmit(forms:NgForm){
      this.formsService.send(forms.value).subscribe(
      response => {        
        this.unprocessForms(TypeToast.Success,'Sucesso','Formulário enviado com sucesso');
        forms.reset();
      },
      error => {
        this.unprocessForms(TypeToast.Error,'Erro','Não foi possivel enviar o formulário no momento');
      }
    )};


    


  


  }


  



