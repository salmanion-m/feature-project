import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent, DailyPriceComponent} from "./components";

const routes: Routes = [
  {path: '', component: ContainerComponent,
    children: [
      {path: 'daily-table' , component: DailyPriceComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyPriceRoutingModule { }
