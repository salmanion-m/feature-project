import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  FilterTableComponent,
  HeaderComponent,
  HeaderrComponent,
  MainSidebarComponent,
  SidebarComponent,
  SidenavComponent, SublevelMenuComponent
} from "./components";
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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CdkMenuModule} from "@angular/cdk/menu";
import {OverlayModule} from "@angular/cdk/overlay";
import { BodyComponent } from './components/body/body.component';
import {AppService} from "./services";



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
    SidenavComponent,
    SublevelMenuComponent,
    HeaderrComponent,
    BodyComponent,

  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    MainSidebarComponent,
    PageHeaderComponent,
    SidenavComponent,
    HeaderrComponent,
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
    FontAwesomeModule,
    CdkMenuModule,
    OverlayModule,


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ AppService ],
})
export class ShareModule {
}
