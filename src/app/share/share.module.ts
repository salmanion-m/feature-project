import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LayoutComponent} from "./components/layout/layout.component";
import {FilterTableComponent, SidebarComponent} from "./components";
import {TableComponent} from "./components/table/table.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [
        LayoutComponent,
        SidebarComponent,
        TableComponent,
        FilterTableComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        RouterModule
    ]
})
export class ShareModule { }
