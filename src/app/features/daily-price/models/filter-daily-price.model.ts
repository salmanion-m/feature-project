export class FilterDailyPrice {
  insCode: number ;
  FromD: string ;
  ToD: string ;

  constructor(json: any = null) {
    this.insCode = json && json['insCode'];
    this.FromD = json && json['FromD'];
    this.ToD = json && json['ToD'];
  }

  static fromJson(json: any) {
    return new FilterDailyPrice(json);
  }
}
