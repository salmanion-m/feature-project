import { Injectable } from '@angular/core';
import {Login, Register} from "../models";
import {AuthService} from "../../../core";
import {catchError, shareReplay, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends AuthService {

  registers(register: Register) {
    return this.http.post(`${this._apiUrl}/register`, register)
    shareReplay();
  }


  Login(log: Login){
    return this.http.post(`${this._apiUrl}/login`,log).pipe(
      tap((res: any) => {
        return res;
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
