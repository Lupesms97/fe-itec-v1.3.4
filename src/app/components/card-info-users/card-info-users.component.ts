import { Component, Input } from '@angular/core';
import { FormsI } from 'src/app/shared/models/FormsI';
import { IFormsData } from 'src/app/shared/models/IFormsData';

@Component({
  selector: 'app-card-info-users',
  templateUrl: './card-info-users.component.html',
  styleUrls: ['./card-info-users.component.css']
})
export class CardInfoUsersComponent {
  @Input()
  data!: IFormsData;

  

  getContacted(): string{
    if(this.data.contacted){
      return 'Usúario não Disponível'
    }
    return 'Livre'
  }
  showInfo(): boolean{
    if(this.data.contacted){
      return true
    }
    return false
  }

}
