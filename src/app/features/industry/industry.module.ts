import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndustryRoutingModule} from './industry-routing.module';
import {
  ContainerComponent,
  ExplanationIndustryComponent,
  IndustryTableComponent,
  JsonIndustryComponent
} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";




@NgModule({
  declarations: [
    ContainerComponent,
    IndustryTableComponent,
    ExplanationIndustryComponent,
    JsonIndustryComponent
  ],
  imports: [
    CommonModule,
    IndustryRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class IndustryModule {
}
