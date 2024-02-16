import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentI } from '../../shared/models/ContentI';
import { BehaviorSubject, Observable, ReplaySubject, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';
import { CookieService } from 'ngx-cookie-service';
import { IResponseApi } from 'src/app/shared/models/IResponseApi';


@Injectable({
  providedIn: 'root'
})
export class CurriculoService {
  private readonly API_URL = 'http://localhost:8080/v1/employee';

  

  constructor(private http:HttpClient, private cookie:CookieService) { }
  
  send(forms:FormsTrabalheConoscoI): Observable<HttpResponse<IResponseApi>>{
    const data = this.saveCurririulo(forms);
    return this.http.post<IResponseApi>(`${this.API_URL}/upload`,data, { observe: 'response' });
  }

  saveCurririulo(forms:FormsTrabalheConoscoI){
    const formData = new FormData();
    formData.append('file',forms.curriculoFile);
    formData.append('name',forms.name);
    formData.append('email',forms.email);
    formData.append('polo',forms.polo);
    formData.append('phone',forms.phone);
    formData.append('setor',forms.setor);
    formData.append('lgpd',forms.lgpd.toString());
    formData.append('timeOfExperience',forms.timeOfExperience);

    return formData;
  }


  


}