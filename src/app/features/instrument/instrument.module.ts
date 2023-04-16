import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentRoutingModule } from './instrument-routing.module';
import {ContainerComponent, ExplanationInstComponent, InstrumentTableComponent, JsonInstComponent} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ContainerComponent,
    InstrumentTableComponent,
    JsonInstComponent,
    ExplanationInstComponent
  ],
  imports: [
    CommonModule,
    InstrumentRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule,

  ]
})
export class InstrumentModule { }
