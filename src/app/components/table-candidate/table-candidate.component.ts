import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurriculoService } from 'src/app/core/services/currciulo.service';
import { IEmployee } from 'src/app/shared/models/IEmployee.model';

@Component({
  selector: 'app-table-candidate',
  templateUrl: './table-candidate.component.html',
  styleUrls: ['./table-candidate.component.css']
})
export class TableCandidateComponent implements OnInit {

  data$ : Observable<IEmployee[]> = of([]);

  constructor(private dataService: CurriculoService) { }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
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

}
