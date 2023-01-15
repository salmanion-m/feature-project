import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {InstrumentTable} from "../models";

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  protected _apiUrl: string;

  constructor(protected http: HttpClient) {
    this._apiUrl = `${environment.apiUrl}/Instrument`
  }

  getInstrument(): Observable<InstrumentTable[]>{
    return this.http.get<InstrumentTable[]>(`${this._apiUrl}`)
  }

}
