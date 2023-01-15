import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Fund} from "../models";

@Injectable({
  providedIn: 'root'
})
export class FundService {

  protected _apiUrl: string;

  constructor(protected http: HttpClient) {
    this._apiUrl = `${environment.apiUrl}/Fund`
  }

  getFundList(): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${this._apiUrl}`);
  }

}
