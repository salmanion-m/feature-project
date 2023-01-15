import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentRoutingModule } from './instrument-routing.module';
import {ContainerComponent, InstrumentTableComponent} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  declarations: [
    ContainerComponent,
    InstrumentTableComponent
  ],
  imports: [
    CommonModule,
    InstrumentRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,

  ]
})
export class InstrumentModule { }
