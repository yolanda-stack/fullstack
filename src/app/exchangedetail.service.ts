import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { Stockexchange } from './stockexchange';
import { STOCKEXCHANGE } from './mock-StockExhange';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface SearchResult {
  exchanges: Stockexchange[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeDetailService {
  private _exchange$ = new BehaviorSubject<Stockexchange[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _state: State = {
    page: 1,
    pageSize: 4
  };
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
   }

  get exchanges$(){return this._exchange$.asObservable();  }
  get total$() { return this._total$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page } = this._state;
    let exchanges = STOCKEXCHANGE;
    const total = exchanges.length;

    exchanges = exchanges.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({exchanges, total});
  }

  getExchange(id:number):Observable<Stockexchange>{
    return of(STOCKEXCHANGE.find(stockexchange=>stockexchange.id===id))
  }
  
  addExchange(stockexchange:Stockexchange):Observable<Stockexchange>{
    const url = `${environment.baseUrl}/managestockexchange/add`;
    return this.http.post<Stockexchange>(url,stockexchange,this.httpOptions);
  }

}
