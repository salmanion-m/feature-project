import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyPriceRoutingModule } from './daily-price-routing.module';
import { ContainerComponent, DailyPriceComponent, LineChartDailyPriceComponent, SplineChartComponent} from "./components";
import {FilterDailyPriceComponent} from "./components/daily-price";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DpDatePickerModule} from "ng2-jalali-date-picker";
import {HighchartsChartModule} from "highcharts-angular";
import {MatDividerModule} from "@angular/material/divider";
import {FundModule} from "../fund/fund.module";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";





// @ts-ignore
@NgModule({
  declarations: [
    ContainerComponent,
    DailyPriceComponent,
    FilterDailyPriceComponent,
    LineChartDailyPriceComponent,
    SplineChartComponent,
  ],
    imports: [
        CommonModule,
        DailyPriceRoutingModule,
        ShareModule,
        MatTableModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        DpDatePickerModule,
        HighchartsChartModule,
        MatDividerModule,
        FundModule,
        MatSelectModule,
        FormsModule,
        MatDialogModule,
    ],
  schemas: [ NO_ERRORS_SCHEMA  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fa-IR'},
  ],
})
export class DailyPriceModule { }
