import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsI } from 'src/app/shared/models/FormsI';
import { NotificationService } from './notification.service';
import { TypeToast } from 'src/app/shared/models/TypeToastE';




@Injectable({
  providedIn: 'root'
})
export class FormsService {


  private readonly API_URL = 'http://localhost:8081/posts';

  constructor(private http:HttpClient) { }


  send(forms:FormsI){
    return this.http.post(`${this.API_URL}/contato`,forms);
  }

  sendEmail(email:string){
    return this.http.post(`${this.API_URL}/email`,email);
  }



}
