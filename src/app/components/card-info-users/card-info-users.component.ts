import { Component, Input, OnInit } from '@angular/core';
import { FormsService } from 'src/app/core/services/forms.service';
import { FormsI } from 'src/app/shared/models/FormsI';
import { IFormsData } from 'src/app/shared/models/IFormsData';

@Component({
  selector: 'app-card-info-users',
  templateUrl: './card-info-users.component.html',
  styleUrls: ['./card-info-users.component.css']
})
export class CardInfoUsersComponent implements OnInit {

  @Input()  
  userDataArray: IFormsData[] = []


  constructor() {
    
/*     this.getDateAltenative();
    console.log(this.userDataArray) */
  }
  ngOnInit(): void {

  }

  
  getContacted(userContacted:boolean): string {
    let response = 'Disponível'; // Defina um valor padrão
  
    if (userContacted) {
      response = 'Indisponível';
    }
  
    return response;
  }
  
  showInfo(userContacted:boolean): boolean {
    let response = false;

    if (userContacted) {
        response = true;
    }

    return response;
  }


  getButtonStyle(userContacted:boolean){
    let buttonstyle = {
      'height':'6vh',
      'padding':'0 2rem 0 2rem' ,
      'border-radius':'2rem',
      'cursor':'pointer',
      'background-color':'green',
      'color':'white',
      'opacity':'1'

    }

    if(userContacted){
      buttonstyle = {
        'height':'6vh',
        'padding':'0 2rem 0 2rem' ,
        'border-radius':'2rem',
        'cursor':'not-allowed',
        'background-color':'green',
        'color':'white',
        'opacity':'0.3'

        
      }
    }

    return buttonstyle;

  }


/*   getData(){
    this.formsService.data.subscribe(
      (data)=>{
        this.userDataArray = data;
        console.log(this.userDataArray)
      }
    )

  } */

  getAvatarImagePath(index: number): string {
    let count = 0;
    if (index < 8) {
      count++;
      return `https://bootdey.com/img/Content/avatar/avatar${index + count}.png`;
      
    } else {
      count =  count - (count + 1);
      return `https://bootdey.com/img/Content/avatar/avatar${index + count}.png`;

    }
  }




  

}
