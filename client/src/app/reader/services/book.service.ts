import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {DeepBook, SplitTextSection} from "../../models/books";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private heroesUrl = 'http://localhost:9000/books/629e0e2d4bc1a4853c1170f4';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSection(id: number): Observable<SplitTextSection> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<SplitTextSection>(url, this.httpOptions).pipe(
      catchError(this.handleError<SplitTextSection>(`getHero id=${id}`))
    );
  }

  getBook(): Observable<DeepBook> {
    const url = `${this.heroesUrl}`;
    return this.http.get<DeepBook>(url, this.httpOptions).pipe(
      catchError(this.handleError<DeepBook>(`getBook`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
