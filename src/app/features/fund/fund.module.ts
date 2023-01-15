import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRoutingModule } from './fund-routing.module';
import {ContainerComponent, FundTableComponent} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    ContainerComponent,
    FundTableComponent
  ],
  imports: [
    CommonModule,
    FundRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FundModule { }
