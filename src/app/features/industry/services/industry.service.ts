import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {IndustryTable} from "../models";

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  protected _apiUrl: string;

  constructor(protected http: HttpClient) {
    this._apiUrl = `${environment.apiUrl}/Industry`
  }


  getIndustry(): Observable<IndustryTable[]> {
    return this.http.get<IndustryTable[]>(`${this._apiUrl}`);
  }

}
