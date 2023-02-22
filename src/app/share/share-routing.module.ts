import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./components/layout/layout.component";
import {RoutingFormComponent} from "../features/dashbord";
import {FundTableComponent} from "../features/fund";
import {LetterTypeModule} from "../features/letter-type/letter-type.module";
import {LetterTypeTableComponent} from "../features/letter-type";

const routes: Routes = [
  //
  // // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'link',
  //       component: RoutingFormComponent
  //     },
  //     {
  //       path: 'fund',
  //       component: FundTableComponent
  //     },
  //     {
  //       path: 'letter',
  //       component: LetterTypeTableComponent
  //     }
  //   ]
  // },
  // {
  //   path: '**',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
