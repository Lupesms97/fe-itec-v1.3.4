import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoursesService } from 'src/app/core/services/courses.service';
import { FormsService } from 'src/app/core/services/forms.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { CoursesI } from 'src/app/shared/models/CoursesI';
import { FormsI } from 'src/app/shared/models/FormsI';
import { PoloSelectionI } from 'src/app/shared/models/PoloSelectionI';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @Input() img: string = '';
  @Input() orderForms: string = '';
  @Input() orderImage: string = '';
  @Input() spanTitle: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() text2: string = '';
  @Input() buttonText: string = '';
  @Input() tag: string = '';
  @Input() showCourses: boolean = true;
  @Input() formsAside: boolean = false;
  @Input() poloOnAside: boolean = true;
  public processingForms: boolean = false;

  cursosTecnico: string[] = [];
  cursosEspecializacao: string[] = [];
  cursosProfissionalizantes: string[] = [];
  cursosEscola: string[] = [];
  polosAvaliable: PoloSelectionI[] = []

  forms: FormsI = {
    name: '',
    email: '',
    polo: '',
    phone: '',
    course: '',
    cupom: '',
    emailMarketing: false,
  };

  constructor(
    private formsService: FormsService,
    private notification: NotificationService,
    private coursesService: CoursesService
  ) {

  }

  ngOnInit(): void {
    this.polosAvaliable = this.showPoloWhereCourseAreAvaliable(this.tag)
    this.setCourseNamesOnNameList()
  }

  cursos: string[] = [];

  processForms() {
    this.processingForms = true;
  }
  public unprocessForms(
    type: TypeToast,
    titleInfo: string,
    messageInfo: string
  ) {
    setTimeout(() => {
      this.processingForms = false;
      this.notification.showToast(type, titleInfo, messageInfo);
    }, 2000);
  }

  onSubmit(forms: NgForm) {
    this.formsService.send(forms.value).subscribe(
      (response) => {
        this.unprocessForms(
          TypeToast.Success,
          'Sucesso',
          'Formulário enviado com sucesso'
        );
        forms.reset();
      },
      (error) => {
        this.unprocessForms(
          TypeToast.Error,
          'Erro',
          'Não foi possivel enviar o formulário no momento'
        );
      }
    );
  }

  showPoloWhereCourseAreAvaliable(tag: string): PoloSelectionI[] {
    switch (tag) {
      case 'Livre':
        return [
          { aka: 'VR_VILA', location: 'Volta redonda - Vila' }
        ]
      case 'Escola':
        return [
          { aka: 'VR_VILA', location: 'Volta redonda - Vila' }
        ]
      case 'Técnico':
        return [
          { aka: 'VR_VILA', location: 'Volta redonda - Vila' },
          { aka: 'ANGRA_DOS_REIS', location: 'Angra dos Reis'},
          { aka: 'RESENDE', location: 'Resende'}
        ]
      case 'ITEC Pro ':
        return [
          { aka: 'VR_VILA', location: 'Volta redonda - Vila' },
          { aka: 'VR_RETIRO', location: 'Volta redonda - Retiro'},
          { aka: 'ANGRA_DOS_REIS', location: 'Parque Mambucaba'},
          { aka: 'ANGRA_DOS_REIS', location: 'Angra dos Reis'},
          { aka: 'ITATIAIA', location: 'Itatiai'},
          { aka: 'PORTO_REAL', location: 'Porto Real'},
          { aka: 'RESENDE', location: 'Resende'}
        ]
       default:
        return [
          { aka: 'VR_VILA', location: 'Volta redonda - Vila' },
          { aka: 'VR_RETIRO', location: 'Volta redonda - Retiro'},
          { aka: 'ANGRA_DOS_REIS', location: 'Parque Mambucaba'},
          { aka: 'ANGRA_DOS_REIS', location: 'Angra dos Reis'},
          { aka: 'ITATIAIA', location: 'Itatiaia'},
          { aka: 'PORTO_REAL', location: 'Porto Real'},
          { aka: 'RESENDE', location: 'Resende'}
        ];
    }
  }

  

  getCoursesByPolo(): string[] {
    switch (this.forms.polo) {
      case 'VR_VILA':
        return [...this.cursosProfissionalizantes, ...this.cursosTecnico, ...this.cursosEspecializacao, ...this.cursosEscola];
      case 'VR_RETIRO':
        return [...this.cursosProfissionalizantes, ...this.cursosEscola];
      case 'ANGRA_DOS_REIS':
        return [...this.cursosProfissionalizantes, ...this.cursosTecnico];
      case 'ITATIAIA':
        return [...this.cursosProfissionalizantes];
      case 'RESENDE':
        return [...this.cursosProfissionalizantes, ...this.cursosTecnico];
      case 'PORTO_REAL':
        return [...this.cursosProfissionalizantes];
      default:
        return [...this.cursosProfissionalizantes, ...this.cursosTecnico, ...this.cursosEspecializacao, ...this.cursosEscola];
    }
  }

  private setCourseNamesOnNameList(){
    this.cursosEscola = this.coursesService.getListEscola()
    this.cursosEspecializacao = this.coursesService.getListLivre()
    this.cursosProfissionalizantes = this.coursesService.getListProfissionalizante()
    this.cursosTecnico = this.coursesService.getListTecnico()
  }
}
