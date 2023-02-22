import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FilterTableComponent, HeaderComponent, MainSidebarComponent, SidebarComponent} from "./components";
import {LayoutComponent} from "./components/layout/layout.component";
import {TableComponent} from "./components/table/table.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatLineModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {PageHeaderComponent} from './components/layout/page-header/page-header.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ShareRoutingModule} from "./share-routing.module";



// @ts-ignore
@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TableComponent,
    FilterTableComponent,
    HeaderComponent,
    MainSidebarComponent,
    PageHeaderComponent,

  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    MainSidebarComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    MatLineModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShareModule {
}
