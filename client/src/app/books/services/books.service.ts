import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {BookDescription} from "../../models/books";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private heroesUrl = 'http://localhost:9000/books/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BookDescription[]> {
    const url = `${this.heroesUrl}/`;
    return this.http.get<BookDescription[]>(url).pipe(
      catchError(this.handleError<BookDescription[]>(`getBooks`))
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
