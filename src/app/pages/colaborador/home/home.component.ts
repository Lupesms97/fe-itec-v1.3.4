import { Component } from '@angular/core';
import { FormsService } from 'src/app/core/services/forms.service';
import { IFormsData } from 'src/app/shared/models/IFormsData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  p:number = 0;
  userData: IFormsData[] = []

  constructor(
    private formsService: FormsService
  ) {
    this.getData();
  }

  user:IFormsData = {
    contacted: false,
    createdAt: new Date(),
    name: 'Felipe',
    email: 'lupe@sms97@gmail.com',
    polo: 'Vila-VR',
    phone: '(24) 999039239',
    course: 'Ciência da Computação ',
    cupom: 'asdaskdj-dasdasd',

  }

  getData(){
    this.formsService.getDataWithoutOwner().subscribe(
      (data)=>{
        this.userData = data;
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }
 
}
