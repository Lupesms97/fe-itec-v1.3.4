import { Component } from '@angular/core';
import { FormsService } from 'src/app/core/services/forms.service';
import { IFormsData } from 'src/app/shared/models/IFormsData';

@Component({
  selector: 'app-minha-carteira',
  templateUrl: './minha-carteira.component.html',
  styleUrls: ['./minha-carteira.component.css']
})
export class MinhaCarteiraComponent {

  userData: IFormsData[] = []

  constructor(
    private formsService: FormsService
  ) {
    this.getData(); 
  }

  
 getData(){
    this.formsService.getDataWithOwner().subscribe(
      (data)=>{
        this.userData = data;
      },
      (error)=>{
        console.log(error)
      }
    )
    
  } 
}
