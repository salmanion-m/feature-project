import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyPriceRoutingModule } from './daily-price-routing.module';
import {ContainerComponent, DailyPriceComponent} from "./components";
import {FilterDailyPriceComponent} from "./components/daily-price";



@NgModule({
  declarations: [
    ContainerComponent,
    DailyPriceComponent,
    FilterDailyPriceComponent
  ],
  imports: [
    CommonModule,
    DailyPriceRoutingModule
  ]
})
export class DailyPriceModule { }
