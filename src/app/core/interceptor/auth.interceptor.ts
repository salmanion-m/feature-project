import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthService} from "../services";
import {Router} from "@angular/router";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService,
              private router: Router) {}

  //
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //
  //   request = request.clone({
  //     setHeaders: {
  //       'Content-Type': 'application/json; charset=utf-8',
  //       'Accept': ' text/plain',
  //       'Authorization': `Bearer ${this.authService.getAuthToken()}`,
  //     }
  //   })
  //
  //   return next.handle(request);
  // }


  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   // @ts-ignore
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser && currentUser.token) {
  //     request = request.clone({
  //       setHeaders: {
  //         'Content-Type': 'application/json',
  //         Authorization: `JWT ${currentUser.token}`
  //       }
  //     });
  //   }
  //
  //
  //   return next.handle(request).pipe( tap(() => {},
  //     (err: any) => {
  //       if (err instanceof HttpErrorResponse) {
  //         if (err.status !== 401 ) {
  //           return;
  //         }
  //         this.router.navigate(['./auth/login']);
  //       }
  //     }));
  // }




  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': ' text/plain',
        'Authorization': `Bearer ${this.authService.getAuthToken()}`,
      }
    })

      return next.handle(request).pipe( tap(() => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401 ) {
              return;
            }
            this.router.navigate(['./auth/login']);
          }
        }));
  }








}
