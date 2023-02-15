import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map, Observable} from "rxjs";
import {UrlHelper} from "../../../share";
import {DailyPrice, FilterDailyPrice} from "../models";

@Injectable({
  providedIn: 'root'
})
export class DailyPriceService {

  private _apiUrl: string;

  constructor(protected http: HttpClient) {
    this._apiUrl = `${environment.apiUrl}/DailyPrice`
  }


  getDailyPriceList(filter: FilterDailyPrice): Observable<DailyPrice[]> {
    return this.http.get<DailyPrice[]>(`${this._apiUrl}`, {params: UrlHelper.fromModel(filter)})
      .pipe(map(data => {
        return data.sort((a , b ) => a.shamsidate > b.shamsidate ? 1: -1)
      }))
  }

}
