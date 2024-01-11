import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentI } from '../../shared/models/ContentI';
import { BehaviorSubject, Observable, ReplaySubject, map, tap } from 'rxjs';
import { CoursesI } from '../../shared/models/CoursesI';
import { ActivatedRoute, Router } from '@angular/router';
// Remove the unused import
// import { Router } from '@angular/router';
// import { TypeNews } from '../shared/models/TypeNews';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private readonly API_URL_R = 'assets/itecpro.json';
  
  private cursos$: BehaviorSubject<CoursesI[]> = new BehaviorSubject<CoursesI[]>([]);

  public cursosEspecializacao$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'Especialização')),

  );
  public cursosTecnico$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'Técnico'))
  ); 888bn1q  2=-0  9 
  public cursosEscola$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'Escola'))

  );
  public cursosProfissonalizante$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'ITEC Pro'))

  );

  constructor(private http: HttpClient,private route: Router) {
    this.refreshPosts();
  }

  private setPostsOnObservable(): void {
    this.http.get<CoursesI[]>(this.API_URL_R)
      .pipe(
        tap(posts => {
          this.cursos$.next(posts);
        }),
      )
      .subscribe();
  }

  public refreshPosts(): void {
    console.log(this.getPosts());

    this.setPostsOnObservable();
  }

  public getPosts(): Observable<CoursesI[]> {
    return this.cursos$;
  }

  public getPostbyId(id: string): Observable<CoursesI> {
    return this.cursos$.pipe(
      map(curso => curso.find(curso => curso.id === id)!)
    );
  }
  


  public getTypeParameterOwner(): string {
    // Add a return statement to return an empty string as a default value
    return this.route.url;
  }


  
}
