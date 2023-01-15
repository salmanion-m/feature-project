import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {LetterTypeTable} from "../models";

@Injectable({
  providedIn: 'root'
})
export class LetterTypeService {

  protected _apiUrl: string;

  constructor(protected http: HttpClient) {
    this._apiUrl = `${environment.apiUrl}/LetterType`;
  }

  getLetterType(): Observable<LetterTypeTable[]>{
    return this.http.get<LetterTypeTable[]>(`${this._apiUrl}`)
  }

}
