import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ignoreElements, map, tap } from 'rxjs';
import { Role } from 'src/app/shared/models/ERole';
import { ResponseDto } from 'src/app/shared/models/IResponseDto';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { TypeToast } from 'src/app/shared/models/TypeToastE';
import { CookieService } from 'ngx-cookie-service';
import { UserCadastro } from 'src/app/shared/models/IUserCadastro';
import { UserInterface } from 'src/app/shared/models/IUserInterface';
import { jwtDecode } from "jwt-decode";
import { UserLoginDto } from 'src/app/shared/models/UserLoginDto';

const TOKEN_KEY = '_tky-usr';
const ROLES_KEY = '_rly-usr';
const USER_NAME = 'name';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<UserCadastro | null>(null);
  user$ = this.user.asObservable();
  isLogged$: Observable<boolean> = this.user$.pipe(map(Boolean));
  role$: Observable<Role> = new Observable<Role>();

  private readonly API_URL = 'http://localhost:8082/v2/auth';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    const token = this.getToken(TOKEN_KEY);
    if (token) {
      const decodedToken = this.decodeJwt(token);
      this.user.next(decodedToken);
      this.role$ = this.user$.pipe(map((user) => user!.role));
    }

  }



  login(
    userLogin:UserLoginDto
  ): Observable<HttpResponse<ResponseDto>> {

    return this.http
      .post<ResponseDto>(
        `${this.API_URL}/user/login`,
        userLogin,
        { ...this.httpOptions, observe: 'response' }
      )
      .pipe(
        tap((resp) => {
          const token = resp.body!.token;
          const roles = this.decodeJwt(token).roles
          const userName = this.decodeJwt(token).name
          const user: UserInterface = {
            token: token,
            role: roles,
            userName: userName
          }
        
          this.setCookie(TOKEN_KEY, token, 1);
          const decodedToken = this.decodeJwt(token);
          this.setRoles(decodedToken.roles);
          this.redirectToHome();
          this.notificationService.showToast(TypeToast.Success, 'Login', 'Login efetuado com sucesso');
        }),
        
        ignoreElements()
      );

      
      
  }

  logout() {
    this.cookieService.delete(TOKEN_KEY);
    this.cookieService.delete(ROLES_KEY);
    this.router.navigateByUrl('/colaborador/login');

  }
  

  private setCookie(name: string, value: string, expires?: number) {
    if (expires) {
      const today: Date = new Date();
      const expiresDate: Date = new Date(
        today.getTime() + expires * 24 * 60 * 60 * 1000
      ); // Multiplica por milissegundos para calcular a data correta
      this.cookieService.set(name, value, { expires: expiresDate });
    } else {
      this.cookieService.set(name, value);
    }
  }

  getToken(value: string) {
    return this.cookieService.get(value);
  }

  decodeJwt(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  }

  getUserName(): string {
    if(this.getToken(TOKEN_KEY)){
      return this.decodeJwt(this.getToken(TOKEN_KEY)).name;
    }else{
      return this.getToken(USER_NAME);
    }
     
  }

  getRoles(){
    return this.getToken(ROLES_KEY);
  }

  cleanRoles() {
    this.user.next(null);
  }

  setRoles(roles: Role) {
    let user = { role: roles } as UserCadastro;
    this.user.next(user);
    this.setCookie(ROLES_KEY, roles);
  }

  private redirectToHome() {
    this.router.navigate(['/colaborador/home'])
  }



}

