import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormsI } from 'src/app/shared/models/FormsI';
import {  Observable, map, switchMap } from 'rxjs';
import { IFormsData } from 'src/app/shared/models/IFormsData';
import { IFormsDataWithDateString } from 'src/app/shared/models/IFormsDataWithDateString';
import { environment } from 'src/app/environments/variables.environments';





@Injectable({
  providedIn: 'root'
})
export class FormsService {


  private readonly API_URL = environment.api_url_forms;

  private dataWithOwnerId$: Observable<IFormsData[]> | undefined;
  private dataWithoutOwnerId$: Observable<IFormsData[]> | undefined;



  constructor(private http:HttpClient) { 
    this.refreshWithOwnerId();
    this.refreshWithoutOwnerId();
  }


  send(forms:FormsI){
    if(forms.cupom == null){
      forms.cupom = '';
    }
    return this.http.post(`${this.API_URL}/recordProspect`,forms);
  }

  sendEmail(email:string){
    return this.http.post(`${this.API_URL}/email`,email);
  }


/* ---------------- GETTING DATE with onwer on START ------------------- */
private getDataWithoutOwnerId(): Observable<IFormsData[]> {
  return this.http.get<IFormsDataWithDateString[]>(`${this.API_URL}/records`).pipe(
    map((prospects) => prospects.map(this.convertJsonToIFormsData))
  );
}


private refreshWithOwnerId() {
  this.dataWithoutOwnerId$ = this.getDataWithoutOwnerId();
}

public getDataWithoutOwner(): Observable<IFormsData[]> {
  return this.dataWithoutOwnerId$ as Observable<IFormsData[]>;
}
/* ---------------- GETTING DATE END ------------------- */


/* ---------------- GETTING DATE WITHOUT onwer on START ------------------- */

private getDataWithOwnerId(idOwner:string ): Observable<IFormsData[]> {
  /* 5e1f3b7b9d1f1b0017f3b7a9 */
  return this.http.get<IFormsDataWithDateString[]>(`${this.API_URL}/records/${idOwner}`).pipe(
    map((prospects) => prospects.map(this.convertJsonToIFormsData))
  );
}

private refreshWithoutOwnerId() {
  this.dataWithOwnerId$ = this.getDataWithOwnerId('5e1f3b7b9d1f1b0017f3b7a9');
}

public getDataWithOwner(): Observable<IFormsData[]> {
  return this.dataWithOwnerId$ as Observable<IFormsData[]>;
}

public updateOwner(idProspect: string, IdOwner: string) {
  return this.http.post(`${this.API_URL}/updateContacted/${idProspect}/${IdOwner}`, {}).pipe(
    switchMap(() => this.getDataWithOwnerId(IdOwner)),
    switchMap(() => this.getDataWithoutOwner())
  );
}

/* ---------------- GETTING DATE END ------------------- */


private convertJsonToIFormsData(item: IFormsDataWithDateString): IFormsData {
  const dateUTC = new Date(item.createdAt); // Adiciona a hora para formatar corretamente como UTC
  const dateBrasilia = new Date(dateUTC.getTime() + (3 * 60 * 60 * 1000)); 
  // Adiciona 3 horas para ajustar para o UTC+3
  return {
    ...item,
    createdAt: new Date(dateBrasilia), // Corrigindo o nome da propriedade para "createdAt"
  };
}










/* constructor(private http:HttpClient) { 


  this.refreshEvents();
  console.log(this.getEvents())
}

private events$: Observable<IFormsData[]> | undefined;

 setEventsOnObservable(): Observable<IFormsData[]> {
   return this.http.get<IFormsData[]>(`${this.API_URL}`).pipe(
     map((items) => items.map(this.convertJsonToIFormsData)),
   );
 }

 public refreshEvents() {
   this.events$ = this.setEventsOnObservable();
 }

 public getEvents(): Observable<IFormsData[]> {
   return this.events$ as Observable<IFormsData[]>;
 } */

 


}
