import {IModel} from "../../models";
import {HttpParams} from "@angular/common/http";

export class UrlHelper {
  static fromModel(model: IModel):  HttpParams {
    let queryParams: HttpParams = new HttpParams();
    let keys = Object.keys(model);

    keys.forEach(key => {
      // @ts-ignore
      queryParams = queryParams.append(key, model[key] ?? '');
    });

    return queryParams
  }
}
