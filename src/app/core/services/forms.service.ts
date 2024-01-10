import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsI } from 'src/app/shared/models/FormsI';
import { NotificationService } from './notification.service';
import { TypeToast } from 'src/app/shared/models/TypeToastE';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class FormsService {


  private readonly API_URL = 'http://localhost:8081/v1/prospects';

  private prospects$: Observable<FormsI[]> = new Observable<FormsI[]>(); 

  constructor(private http:HttpClient) { }

  private setProspectsOnObservable(){
    this.prospects$ = this.http.get<FormsI[]>(`${this.API_URL}/records`);
  }

  send(forms:FormsI){
    return this.http.post(`${this.API_URL}/recordProspect`,forms);
  }

  sendEmail(email:string){
    return this.http.post(`${this.API_URL}/email`,email);
  }

  getUsers(){
    return this.http.get(`${this.API_URL}/records`);
  }



}
