import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import {ContainerComponent, RoutingFormComponent} from "./components";
import {ShareModule} from "../../share/share.module";



@NgModule({
  declarations: [
    ContainerComponent,
    RoutingFormComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    ShareModule
  ]
})
export class DashbordModule { }
