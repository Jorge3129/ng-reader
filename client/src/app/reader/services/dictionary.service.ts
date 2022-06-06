import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {DictEntry, LatinDictEntry} from "../../models/words";
import {buildQuery, convertFromLatin} from "./constants";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) {
  }

  searchWord(word: string): Observable<DictEntry[]> {
    return this.http.get<LatinDictEntry[]>(buildQuery(word)).pipe(
      map(results => {
        return results.map(entry => convertFromLatin(entry))
      }),
      catchError(this.handleError<DictEntry[]>(`get word ${word}`))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
