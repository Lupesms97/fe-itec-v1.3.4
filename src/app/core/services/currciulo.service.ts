import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentI } from '../../shared/models/ContentI';
import { BehaviorSubject, Observable, ReplaySubject, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';
import { CookieService } from 'ngx-cookie-service';
import { IResponseApi } from 'src/app/shared/models/IResponseApi';
import { IEmployee } from 'src/app/shared/models/IEmployee.model';
import { EmployeeResponse } from 'src/app/shared/models/EmployeeResponse';


@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

  private readonly API_URL = 'http://localhost:8081/v1/employees';

  private data$: BehaviorSubject<IEmployee[]> = new BehaviorSubject<IEmployee[]>([]);

  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalElements$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.getPaginateData();
  }

  send(forms: FormsTrabalheConoscoI): Observable<HttpResponse<IResponseApi>> {
    const data = this.saveCurririulo(forms);
    return this.http.post<IResponseApi>(`${this.API_URL}/upload`, data, { observe: 'response' });
  }


  private setData(size: number, page: number) {
    this.http.get<EmployeeResponse>(`${this.API_URL}/content?size=${size}&page=${page}`).pipe(
      tap((response: EmployeeResponse) => {
        this.data$.next(response.content);
        this.totalPage$.next(response.totalPages - 1);
        this.totalElements$.next(response.totalElements);
      })
    ).subscribe();
  }

  getPaginateData(size?: number, page?: number) {
    const defaultSize = 10;
    const defaultPage = 0;


    if (size !== undefined && page !== undefined) {
      this.currentPage$.next(page);
      this.setData(size, page);
    } else if (page !== undefined) {
      this.currentPage$.next(page);
      this.setData(defaultSize, page);
    } else if (size !== undefined) {
      this.setData(size, defaultPage);
    } else {
      this.setData(defaultSize, defaultPage);
    }
  }

  nextPage() {
    const nextPage = this.currentPage$.value + 1;
    const totalPages = this.totalPage$.value;

    this.currentPage$.next(Math.min(nextPage, totalPages));
    this.getPaginateData(10, this.currentPage$.value);
}

previousPage() {
    const previousPage = Math.max(this.currentPage$.value - 1, 0);
    this.currentPage$.next(previousPage);
    this.getPaginateData(10, previousPage);
}



  getSearchEmployee(polo?: string, setor?: string, timeOfExperience?: string) {
    let url = this.getUrl(polo, setor, timeOfExperience);
    this.http.get<IEmployee[]>(`${this.API_URL}/search${url}`).pipe(
      tap((response: IEmployee[]) => {
        this.data$.next(response);
        this.totalElements$.next(response.length);
      })
    ).subscribe();
  }

  private getUrl(polo?: string, setor?: string, timeOfExperience?: string): string {
    const queryParams = [];

    if (polo) {
      queryParams.push(`polo=${polo}`);
    }
    if (setor) {
      queryParams.push(`setor=${setor}`);
    }
    if (timeOfExperience) {
      queryParams.push(`timeOfExperience=${timeOfExperience}`);
    }

    return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  }

  getData(): Observable<IEmployee[]> {
    return this.data$.asObservable();
  }

  private saveCurririulo(forms: FormsTrabalheConoscoI) {
    const formData = new FormData();
    formData.append('file', forms.curriculoFile);
    formData.append('name', forms.name);
    formData.append('email', forms.email);
    formData.append('polo', forms.polo);
    formData.append('phone', forms.phone);
    formData.append('setor', forms.setor);
    formData.append('lgpd', forms.lgpd.toString());
    formData.append('timeOfExperience', forms.timeOfExperience);

    return formData;
  }

  downloadCurriculo(curriculoIdentifier: string) {
    return this.http.get(`${this.API_URL}/download/${curriculoIdentifier}`, { responseType: 'blob' });
  }




}