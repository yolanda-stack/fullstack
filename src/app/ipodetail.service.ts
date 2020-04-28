import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { Ipo } from './IPO'
import { IPO } from './IPOdetail';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface SearchResult {
  ipodetails: Ipo[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class IpoDetailService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _ipodetail$ = new BehaviorSubject<Ipo[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  private _state: State = {
    page: 1,
    pageSize: 4
  };
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._ipodetail$.next(result.ipodetails);
      this._total$.next(result.total);
    });

    this._search$.next();
   }

  get ipodetails$(){return this._ipodetail$.asObservable();  }
  get total$() { return this._total$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page } = this._state;
    let ipodetails = IPO;
    const total = ipodetails.length;

    ipodetails = ipodetails.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ipodetails, total});
  }

  getIpodetail(id:number):Observable<Ipo>{
    return of(IPO.find(ipo=>ipo.id===id))
  }

  updateIpodetail(ipo:Ipo):Observable<any>{
    const url = `${environment.baseUrl}/manageipo/update`;
    return this.http.put(url,ipo,this.httpOptions);
  }

}
