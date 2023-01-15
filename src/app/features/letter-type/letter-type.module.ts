import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LetterTypeRoutingModule} from './letter-type-routing.module';
import {ContainerComponent, LetterTypeTableComponent} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    ContainerComponent,
    LetterTypeTableComponent
  ],
  imports: [
    CommonModule,
    LetterTypeRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class LetterTypeModule {
}
