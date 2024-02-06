import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentI } from '../../shared/models/ContentI';
import { BehaviorSubject, Observable, ReplaySubject, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  private readonly API_URL = 'http://localhost:8081/v1/prospects';

  localStorage = window.localStorage;
  
  constructor(private http:HttpClient, private cookie:CookieService) { }
  
  send(forms:FormsTrabalheConoscoI){
    this.saveCurririulo(forms.curriculoFile as File);
    return this.http.post(`${this.API_URL}/curriculo`,forms);
  }

  saveCurririulo(file:File){
    this.cookie.set
    const formData = new FormData();
    formData.append('file',file);
    this.cookie.set('curriculo',JSON.stringify(formData));
    return formData;
  }


  


}