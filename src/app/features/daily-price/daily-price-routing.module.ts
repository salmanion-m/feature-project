import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent, DailyPriceComponent, LineChartDailyPriceComponent} from "./components";

const routes: Routes = [
  {path: '', component: ContainerComponent,
    children: [
      {path: 'daily-table' , component: DailyPriceComponent},
      {path: 'lineChart' , component: LineChartDailyPriceComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyPriceRoutingModule { }
