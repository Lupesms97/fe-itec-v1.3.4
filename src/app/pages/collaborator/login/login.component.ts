import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ResponseDto } from 'src/app/shared/models/IResponseDto';
import { UserLogin } from 'src/app/shared/models/IUserLogin';
import { TypeToast } from 'src/app/shared/models/TypeToastE';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private notifications: NotificationService
    ) {}
  alertMessage: any = ''

  user: UserLogin = {
    login: '',
    password: ''
  }

  resp:ResponseDto = {
    token: '',
    acessInfo: {
      permission: [],
      availiableCompanies: []
    }
  }

  autenticar(form: NgForm){
    this.router.navigate(['/colaborador/home']);
    let userLogin:UserLogin = {
      login: form.value.login,
      password: form.value.password
    }

    this.authService.login(userLogin)
      .subscribe(
        (response: HttpResponse<ResponseDto>) => {
          const token = response.body?.token;
          const acess = response.body?.acessInfo;
          const status = response.status;
          this.resp.token = token!;
          this.resp.acessInfo = acess!;
          
          const role:string = this.authService.decodeJwt(token!).roles;
          
        },
        (error) => {          
          this.alertMessage = 'Usuário ou senha inválidos';
          this.notifications.showToast(TypeToast.Error, 'Login', 'Usuário ou senha inválidos');
        }
      );

  }

    
}

