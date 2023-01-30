import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FundRoutingModule} from './fund-routing.module';
import {ContainerComponent, FundTableComponent, LayotedComponent} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ContainerComponent,
    FundTableComponent,
    LayotedComponent
  ],
  imports: [
    CommonModule,
    FundRoutingModule,
    ShareModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule
  ],
  exports: [
    LayotedComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FundModule {
}
