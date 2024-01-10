import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentI } from '../../shared/models/ContentI';
import { BehaviorSubject, Observable, ReplaySubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';


@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
    private readonly API_URL = 'http://localhost:8081/v1/prospects';
  
    constructor(private http:HttpClient) { }
  
    send(forms:FormsTrabalheConoscoI){
      return this.http.post(`${this.API_URL}/curriculo`,forms);
    }
  

}