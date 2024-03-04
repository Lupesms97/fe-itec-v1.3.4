import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { EmployeeResponse } from 'src/app/shared/models/EmployeeResponse';
import { FormsTrabalheConoscoI } from 'src/app/shared/models/FormsTrabalheConoscoI';
import { IOpinionsResponse } from 'src/app/shared/models/IOpinionsResponse';
import { IResponseApi } from 'src/app/shared/models/IResponseApi';
import { AuthService } from './auth.service';
import { IOpinions } from 'src/app/shared/models/IOpinions';
import { IOpinionsApiResponse } from 'src/app/shared/models/IOpinionsApiResponse';

@Injectable({
  providedIn: 'root'
})
export class OmbudsmanService {
  private readonly API_URL = 'http://localhost:8080/v1/opinions';


  private data$: BehaviorSubject<IOpinionsResponse[]> = new BehaviorSubject<IOpinionsResponse[]>([]);
  currentPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalPage$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalElements$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    
  }

  send(forms: IOpinions): Observable<IResponseApi> {
    return this.http.post<IResponseApi>(`${this.API_URL}/creatOpinion`, forms);
  }


  private setData(size: number, page: number) {

    this.http.get<IOpinionsApiResponse>(`${this.API_URL}/getOpinions?size=${size}&page=${page}`).pipe(
      tap((response: IOpinionsApiResponse) => {
        this.data$.next(response.content);
        console.log(response.content)
        console.log(this.data$.value)
        this.totalPage$.next(response.totalPages - 1);
        this.totalElements$.next(response.totalElements);
      })
    ).subscribe();
  }

  private getPaginateData(size?: number, page?: number) {
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


  public callData(){
    this.getPaginateData()
  }
 

  public getData(): Observable<IOpinionsResponse[]> {
    return this.data$.asObservable();
  }

}
