import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurriculoService } from 'src/app/core/services/currciulo.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { OmbudsmanService } from 'src/app/core/services/ombudsman.service';
import { IOpinionsResponse } from 'src/app/shared/models/IOpinionsResponse';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-table-ombudsman',
  templateUrl: './table-ombudsman.component.html',
  styleUrls: ['./table-ombudsman.component.css']
})
export class TableOmbudsmanComponent implements OnInit {

  data$ : Observable<IOpinionsResponse[]> = of([]);
  elements$ : Observable<number> = of(0);
  pages$ : Observable<number> = of(0);
  page$ : Observable<number> = of(0);
  userOnModal: IOpinionsResponse = {
    createdAt: '',
    name: '',
    email: '',
    polo: '',
    phone: '',
    course: '',
    message: '',

  }

  polosAvaliable = [
    {value: 'VR_VILA', viewValue: 'Volta Redonda - Vila'},
    {value: 'VR_RETIRO', viewValue: 'Volta Redonda - Retiro'},
    {value: 'ANGRA_DOS_REIS', viewValue: 'Angra dos Reis'},
    {value: 'RESENDE', viewValue: 'Resende'},
    {value: 'PORTO_REAL', viewValue: 'Porto Real'},
    {value: 'ITATIAIA', viewValue: 'Itatiaia'}
  ]
  setores = [
    'Administrativo',
    'Financeiro',
    'Comercial',
    'Marketing',
    'Tecnologia',
    'Recursos Humanos',
    'Limpeza', 'Departamento Pessoal', 'Professor', 'Coordenador Pedágogico', 'Professor', 'Secretaria'
  ];


  constructor(private dataService: OmbudsmanService) {
    this.dataService.callData();
   }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    this.elements$ = this.dataService.totalElements$;
    this.pages$ = this.dataService.totalPage$;
    this.page$ = this.dataService.currentPage$;
  }

  setUserOnModal(user: IOpinionsResponse){
    this.userOnModal = user;

  }

  closeModal(){
    this.userOnModal = {
      createdAt: '',
      name: '',
      email: '',
      polo: '',
      phone: '',
      course: '',
      message: '',

    }
  }

  nextpage(){
    this.dataService.nextPage();
  }
  previouspage(){
    this.dataService.previousPage();
  }


  showPolo(polo: string): string{
    switch(polo){
      case 'VR_VILA':
        return 'Volta Redonda - Vila';
      case 'VR_RETIRO':
        return 'Volta Redonda - Retiro';
      case 'ANGRA_DOS_REIS':
        return 'Angra dos Reis';
      case 'RESENDE':
        return 'Resende';
      case 'PORTO_REAL':
        return 'Porto Real';
      case 'ITATIAIA':
        return 'Itatiaia';
      default:
        return 'Not Found';  
     }
  }


}

