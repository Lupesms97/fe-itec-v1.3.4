import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
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

  isAdmin = false ;

  constructor(private authService:AuthService) {
    this.setIsAdmin()
   }


   setIsAdmin(){
    this.authService.role$.subscribe(role => {
      if(role === 'ADMIN'){
        this.isAdmin = true;
      }
    })
  };
 
}
