import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ignoreElements, map, of, tap } from 'rxjs';
import { Role } from 'src/app/shared/models/ERole';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { TypeToast } from 'src/app/shared/models/TypeToastE';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from "jwt-decode";
import { IUserLogin } from 'src/app/shared/models/IUserLogin';
import { IResponseLoginDto } from 'src/app/shared/models/IResponseLoginDto';
import { IToken } from 'src/app/shared/models/IToken';
import { EmailObjPasswordAndTokenDto } from 'src/app/shared/models/EmailObjPasswordAndTokenDto';
import { IResponseReset } from 'src/app/shared/models/IResponseReset';
import { environment } from 'src/app/environments/variables.environments';




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<IResponseLoginDto | null>(null);
  private token$ = new BehaviorSubject<IToken | null>(null);
  user$ = this.user.asObservable();
  isLogged$: Observable<boolean> = this.user$.pipe(map(Boolean));
  role$ = new BehaviorSubject<Role>(Role.UNDEFINED_ROLE);
  ouvidoria$ = new BehaviorSubject<boolean>(false);

  private readonly API_URL = environment.api_url_auth;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private notifications: NotificationService
  ) {
    const token = this.getToken(environment.TOKEN_KEY);
    if (token) {
      const decodedToken = this.decodeJwt(token);
      this.user.next(decodedToken);
      this.role$.pipe(map((role) => role));
    }
  }

  /* ----------------- LOGIN METHOD  ------------------------ */

  login(
    userLogin:IUserLogin
  ): Observable<HttpResponse<IResponseLoginDto>> {

    return this.http
      .post<IResponseLoginDto>(
        `${this.API_URL}/user/login`,
        userLogin,
        { ...this.httpOptions, observe: 'response' }
      )
      .pipe(
        tap((resp) => {

          const objComplete:IResponseLoginDto = {
            token: resp.body!.token,
            acessInfo: resp.body!.acessInfo
          }

          this.setInfo( objComplete);

        }),
        
        ignoreElements()
      );
  }

  /* ----------------- LOGIN METHOD  ------------------------ */

  /* ----------------- GET CODE TO RESET PASSWORD METHOD  ------------------------ */

  getCodeToResetPassword(email: string): Observable<HttpResponse<IResponseReset>> {
    return this.http
      .post<IResponseReset>(
        `${this.API_URL}/user/reset-code`,
        { email },
        { ...this.httpOptions, observe: 'response' }
      ) 
  }

  /* ----------------- GET CODE TO RESET PASSWORD METHOD  ------------------------ */

  /* ----------------- RESET PASSWORD METHOD  ------------------------ */
  resetPassword(emailAndtoken: EmailObjPasswordAndTokenDto) : Observable<HttpResponse<IResponseReset>>{
    return this.http
    .post<IResponseReset>(
      `${this.API_URL}/user/reset-password`,
       emailAndtoken ,
      { ...this.httpOptions, observe: 'response' }
    ) 
    
  }
  /* ----------------- RESET PASSWORD METHOD  ------------------------ */


  logout() {
    this.cleanInfo();
    this.router.navigateByUrl('/colaborador/login');
  }
  

  private setCookie(name: string, value: string, expires?: number) {
    if (expires) {
      const today: Date = new Date();
      const expiresDate: Date = new Date(
        today.getTime() + expires * 24 * 60 * 60 * 1000
      ); // Multiplica por milissegundos para calcular a data correta
      this.cookieService.set(name, value, { expires: expiresDate },);
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

  private setInfo( obj: IResponseLoginDto){
    
    const roles = this.decodeJwt(obj.token).roles
    const userName = this.decodeJwt(obj.token).name
    this.setNameRoleToken(userName, roles);

/*     this.ouvidoria$.next(this.hastheAuth(obj.acessInfo));
 */
    this.user.next(obj);
  
    this.setCookie(environment.TOKEN_KEY, obj.token, 1);


    this.redirect(roles);
  }
  
/*   private hastheAuth(acessInfo: { permission: string[]; availiableCompanies: string[]; }): boolean {
    return acessInfo.permission.includes('OUVIDORIA');
  } */



  getUserName(): string {
    if(this.getToken(environment.TOKEN_KEY)){
      return this.decodeJwt(this.getToken(environment.TOKEN_KEY)).name;
    }else{
      return this.getToken(environment.USER_NAME);
    }
     
  }

  getRoles(){
    return this.getToken(environment.ROLES_KEY);
  }

  private cleanInfo() {
    this.user.next(null);
    this.cookieService.delete(environment.TOKEN_KEY);
    this.cookieService.delete(environment.ROLES_KEY);
  }

   private setNameRoleToken(name : string, roles: Role) {

    /* this.user.next(user); */
    this.setCookie(environment.ROLES_KEY, roles);
    const tokenObj : IToken = { roles: roles, name: name}
    this.token$.next(tokenObj);
    this.role$.next(roles);
  }

  private redirect(roles: Role) {
    if(roles.includes(Role.ADMIN)){
      this.router.navigate(['colaborador/dashboard']);
    }
    else if(roles.includes(Role.USER)){
      this.router.navigate(['colaborador/home']);
    }
  }

  notificationToastSucess(){
    this.notifications.showToast(TypeToast.Success, 'Login', 'Login efetuado com sucesso');
  }


}

