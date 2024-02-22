import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { EmailObjDto } from 'src/app/shared/models/EmailObjDto';
import { EmailObjPasswordAndTokenDto } from 'src/app/shared/models/EmailObjPasswordAndTokenDto';
import { IResponseReset } from 'src/app/shared/models/IResponseReset';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  etapa1: boolean = true;
  etapa2: boolean = false;
  etapa3: boolean = false;
  passwordNotEquals: boolean = false;


  constructor(
    private authService: AuthService,
    private notification: NotificationService,
    private router: Router
    ) {}

    info: EmailObjDto = {
      email: ''
    }
    reset: EmailObjPasswordAndTokenDto = {
      newPassword: '',
      token: ''
    }
    verifypassWord: string = '';

    goToEtapa3(){
      this.etapa1 = false;
      this.etapa2 = false;
      this.etapa3 = true;
    }
    goBackEtapa1(){
      this.etapa1 = true;
      this.etapa2 = false;
      this.etapa3 = false;
    }

  submit(form: NgForm){
    if(form.value.password === form.value.verifypassWord){
      this.authService.getCodeToResetPassword(this.info.email).subscribe(
        (response: HttpResponse<IResponseReset>) => {
          this.etapa1 = false;
          this.etapa2 = true;
          this.etapa3 = false;
          this.notification.showToast(TypeToast.Info, 'Código enviado', response.body!.message);
          form.reset();
        },
        (error) => {     
         
          this.notification.showToast(TypeToast.Error, 'Código não enviado',error.error.message);
        }
      );
    }else{
      this.passwordNotEquals = true;
    }
    
    
  }

  submitCode(form: NgForm){
    this.authService.resetPassword(this.reset).subscribe(
      (response: HttpResponse<IResponseReset>) => {
        this.etapa1 = false;
        this.etapa2 = false;
        this.etapa3 = true;
        this.notification.showToast(TypeToast.Info, 'Nova Senha', response.body!.message);
        this.redirectToLogin()
        form.reset();
      },
      (error) => {     
       
        this.notification.showToast(TypeToast.Error, 'Error',error.error.message);
      }
    );
  }

  private redirectToLogin() {
    this.router.navigate(['/colaborador/login'])
  }

}
