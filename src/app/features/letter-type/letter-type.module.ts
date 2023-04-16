import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LetterTypeRoutingModule} from './letter-type-routing.module';
import {
  ContainerComponent,
  ExplanationLetterComponent,
  JsonLetterComponent,
  LetterTypeTableComponent
} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ContainerComponent,
    LetterTypeTableComponent,
    ExplanationLetterComponent,
    JsonLetterComponent
  ],
  imports: [
    CommonModule,
    LetterTypeRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class LetterTypeModule {
}
