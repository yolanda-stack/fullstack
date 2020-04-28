import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  role;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true),
      tap(val=>this.role = 0)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
