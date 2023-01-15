import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyPriceRoutingModule } from './daily-price-routing.module';
import {ContainerComponent, DailyPriceComponent} from "./components";
import {FilterDailyPriceComponent} from "./components/daily-price";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    ContainerComponent,
    DailyPriceComponent,
    FilterDailyPriceComponent
  ],
  imports: [
    CommonModule,
    DailyPriceRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class DailyPriceModule { }
