import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FormsService } from 'src/app/core/services/forms.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { FormsI } from 'src/app/shared/models/FormsI';
import { IFormsData } from 'src/app/shared/models/IFormsData';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-card-info-users',
  templateUrl: './card-info-users.component.html',
  styleUrls: ['./card-info-users.component.css']
})
export class CardInfoUsersComponent implements OnInit {

  
  userDataArray: IFormsData[] = [];
  showInformation = false;
  carteira = '';


  constructor(private router:Router, private formsService:FormsService,private notificationService:NotificationService) {
    
/*     this.getDateAltenative();
    console.log(this.userDataArray) */
    this.showInfo()
    this.getContacted();
    this.getData(this.getRouter());

  }
  ngOnInit(): void {
  }

  

  
  getContacted() {
    if(this.getRouter() === '/colaborador/home'){
      this.carteira = 'Disponível'
    }else if(this.getRouter() === '/colaborador/minha-carteira'){
      this.carteira = 'Indisponível'

    }else{
      
    }
  }
  
  showInfo() {
    if(this.getRouter() === '/colaborador/home'){
      this.showInformation = false;
    }else if(this.getRouter() === '/colaborador/minha-carteira'){
      this.showInformation = true;
    }else{
      this.notificationService.showToast(TypeToast.Error,'Error','Não foi possivel carregar os dados!');
    }

  }


  getButtonStyle(){

    let buttonstyle = {
      'height':'6vh',
      'padding':'0 2rem 0 2rem' ,
      'border-radius':'2rem',
      'cursor':'pointer',
      'background-color':'green',
      'color':'white',
      'opacity':'1'

    }

    if(this.showInformation){
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

  updateContacted(idProspect:string){
    let IdOwner = '5e1f3b7b9d1f1b0017f3b7a9';
    this.formsService.updateOwner(idProspect,IdOwner).subscribe(
      (data)=>{
        this.notificationService.showToast(TypeToast.Success,'Sucesso','Atualizado com sucesso!');
        this.getData(this.getRouter());
      },
      (error)=>{
        this.notificationService.showToast(TypeToast.Error,'Error','Não foi possivel atualizar os dados!');
      }
    )
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

  getRouter(){
    return this.router.url;
  }

  getData(router:string){
    if(router === '/colaborador/minha-carteira'){
      this.getDataMyWallet();
    }else if(router === '/colaborador/home'){
      
      this.getDataHome();
    }else{
      this.notificationService.showToast(TypeToast.Error,'Error','Não foi possivel carregar os dados!');
    }

  }

  getDataMyWallet(){
    this.formsService.getDataWithOwner().subscribe(
      (data)=>{
        this.userDataArray = data;
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }


  getDataHome(){
    this.formsService.getDataWithoutOwner().subscribe(
      (data)=>{
        this.userDataArray = data;
      },
      (error)=>{
        console.log(error)
      }
    )
    
  }
  getCity(cityString: string): string {
    switch (cityString) {
      case 'VR_VILA':
        return 'Vila VR';
      case 'VR_RETIRO':
         return 'Retiro VR';
      case 'ANGRA_DOS_REIS':
        return 'Angra dos Reis';
      case 'BARRA_DO_PIRAI':
        return 'Barra do Piraí';
      case 'BARRA_MANSA':
        return 'Barra Mansa';
      case 'PORTO_REAL':
        return 'Porto Real';  
      default:
        return cityString;
    }
  }


  

}
