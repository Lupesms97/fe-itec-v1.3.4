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
  private readonly API_URL_R = 'assets/cursos.json';
  
  private cursos$: BehaviorSubject<CoursesI[]> = new BehaviorSubject<CoursesI[]>([]);

  public cursosCursosLivres$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'Cursos Livres')),

  );
  public cursosESuperior$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'Ensino Superior'))
  );
  public cursosEad$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'EAD'))

  );
  public cursosProfissonalizante$: Observable<CoursesI[]> = this.cursos$.pipe(
    map(posts => posts.filter(post => post.tag === 'Profissionalizantes'))

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
