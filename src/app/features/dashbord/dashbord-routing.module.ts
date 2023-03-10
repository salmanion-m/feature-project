import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent, RoutingFormComponent} from "./components";

const routes: Routes = [
  //bayad taghyir dade shavad
  {path: '', pathMatch: 'full' , redirectTo: 'login'},
  {path: '' , component: ContainerComponent,
    children:[
      {path: 'link' , component: RoutingFormComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
