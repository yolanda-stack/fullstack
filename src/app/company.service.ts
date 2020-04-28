import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {Company} from './company';
import {COMPANIES} from './companies';
// import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import { environment } from "../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface SearchResult {
  companies: Company[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

const compare = (v1: string, v2: string) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function matches(company: Company, term: string) {
  return company.companyname.toLowerCase().includes(term.toLowerCase());
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _companies$ = new BehaviorSubject<Company[]>([]);
  private _total$ = new BehaviorSubject<number>(0);
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
  };

  private _company :Company;

  constructor(private http: HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._companies$.next(result.companies);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get companies$() { return this._companies$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { pageSize, page, searchTerm} = this._state;

    let companies = COMPANIES;

    // 1. filter
    companies = companies.filter(company => matches(company, searchTerm));
    const total = companies.length;

    // 2. paginate
    companies = companies.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({companies, total});
  }

  getCompany(id:number):Observable<Company>{
    return of(COMPANIES.find(company=>company.id===id))
  }
  
  addCompany(company:Company):Observable<Company>{
    const url = `${environment.baseUrl}/managecompanies/add`;
    return this.http.post<Company>(url,company,this.httpOptions);
  }

  updateCompany(company:Company):Observable<any>{
    const url = `${environment.baseUrl}/managecompanies/update`;
    return this.http.put(url,company,this.httpOptions);
  }
}
