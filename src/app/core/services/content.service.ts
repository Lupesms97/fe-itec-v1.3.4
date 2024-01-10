import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentI } from '../../shared/models/ContentI';
import { BehaviorSubject, Observable, ReplaySubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private readonly API_URL_R = 'assets/content.json';
  
  private posts$: BehaviorSubject<ContentI[]> = new BehaviorSubject<ContentI[]>([]);

  public contentNews$: Observable<ContentI[]> = this.posts$.pipe(
    map(posts => posts.filter(post => post.tag === 'News')),
  );
  public contentBlog$: Observable<ContentI[]> = this.posts$.pipe(
    map(posts => posts.filter(post => post.tag === 'Blog'))
  );
  public contentPost$: Observable<ContentI[]> = this.posts$.pipe(
    map(posts => posts.filter(post => post.tag === 'Post'))

  );

  constructor(private http: HttpClient, private route:Router) {
    this.refreshPosts();
  }

  private setPostsOnObservable(): void {
    this.http.get<ContentI[]>(this.API_URL_R)
      .pipe(
        tap(posts => {
          this.posts$.next(posts);
        }),
       
      )
      .subscribe();
  }

  public refreshPosts(): void {
    this.setPostsOnObservable();
  }

  public getPosts(): Observable<ContentI[]> {
    return this.posts$;
  }

  public getPostbyId(id: string): Observable<ContentI> {
    return this.posts$.pipe(
      map(posts => posts.find(post => post.id === id)!)
    );
  }
  
  public getTypeParameterOwner(): string {
    // Add a return statement to return an empty string as a default value
    return this.route.url;
  }
}
