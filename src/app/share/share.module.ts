import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
    declarations: [
        LayoutComponent,
        SidebarComponent,
        TableComponent,
        FilterTableComponent,
        HeaderComponent,
        MainSidebarComponent
    ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        MainSidebarComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        RouterModule,
        MatCardModule,
        MatMenuModule,
        MatExpansionModule,
        MatLineModule,
        MatButtonModule
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ShareModule { }
