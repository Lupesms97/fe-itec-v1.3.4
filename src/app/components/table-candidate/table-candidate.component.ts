import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { format, set } from 'date-fns';
import { Observable, of } from 'rxjs';
import { CurriculoService } from 'src/app/core/services/currciulo.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IEmployee } from 'src/app/shared/models/IEmployee.model';
import { SearchFormsI } from 'src/app/shared/models/SearchForms';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-table-candidate',
  templateUrl: './table-candidate.component.html',
  styleUrls: ['./table-candidate.component.css']
})
export class TableCandidateComponent implements OnInit {

  data$ : Observable<IEmployee[]> = of([]);
  elements$ : Observable<number> = of(0);
  pages$ : Observable<number> = of(0);
  page$ : Observable<number> = of(0);

  searchForms: SearchFormsI = {
    polo: '',
    setor: '',
    timeOfExperience: ''
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
  timeOfExperience = [
    
    'Sem experiência',
    'Estágio',
    'Até 1 ano',
    '+1 ano',
    '+3 anos',
    '+5 anos',

  ];

  constructor(private dataService: CurriculoService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
    this.elements$ = this.dataService.totalElements$;
    this.pages$ = this.dataService.totalPage$;
    this.page$ = this.dataService.currentPage$;
  }

  download(curriculoIndentifier: string, employeeName: string) {
    this.dataService.downloadCurriculo(curriculoIndentifier).subscribe(
      (response: Blob) => {
        const url = window.URL.createObjectURL(response);
        const link = document.createElement('a');
        link.href = url;
        link.download = employeeName + '-curriculo.pdf';
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      },
      (error) => {
        console.error('Erro ao baixar o currículo:', error);
      }
    );
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
  submitForm() {
    let timeInString =  encodeURIComponent(this.searchForms.timeOfExperience) 
    this.dataService.getSearchEmployee(this.searchForms.polo, this.searchForms.setor, timeInString);

    setTimeout(() => {
      if (this.dataService.totalElements$.value === 0) {
        this.notificationService.showToast(TypeToast.Warning, 'Aviso', 'Nenhum resultado encontrado para sua busca');
      }      
    },500)

    ;
  }

}
