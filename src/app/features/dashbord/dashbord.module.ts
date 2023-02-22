import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import {ContainerComponent, RoutingFormComponent} from "./components";
import {ShareModule} from "../../share/share.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";



@NgModule({
  declarations: [
    ContainerComponent,
    RoutingFormComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    ShareModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule
  ]
})
export class DashbordModule { }
