import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {IndustryRoutingModule} from './industry-routing.module';
import {ContainerComponent, IndustryTableComponent} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    ContainerComponent,
    IndustryTableComponent
  ],
  imports: [
    CommonModule,
    IndustryRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA  ]
})
export class IndustryModule {
}
