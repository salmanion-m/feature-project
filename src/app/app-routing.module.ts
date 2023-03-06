import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingFormComponent} from "./features/dashbord";
import {FundTableComponent} from "./features/fund";
import {LetterTypeTableComponent} from "./features/letter-type";
import {DailyPriceComponent} from "./features/daily-price";
import {InstrumentTableComponent} from "./features/instrument";
import {IndustryTableComponent} from "./features/industry";
import {AppComponent} from "./app.component";

const routes: Routes = [
  //bayad taghir dade shavad
  {path: '', pathMatch: 'full', redirectTo: 'dashbord/link'},
  {path: 'table', component: AppComponent },
  {path: 'auth', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)},
  {path: 'dashbord', loadChildren: () => import('./features/dashbord/dashbord.module').then(m => m.DashbordModule)},
  {path: 'day', loadChildren: () => import('./features/daily-price/daily-price.module').then(m => m.DailyPriceModule)},
  {path: 'fund', loadChildren: () => import('./features/fund/fund.module').then(m => m.FundModule)},
  {path: 'industry' , loadChildren: () => import('./features/industry/industry.module').then(m=> m.IndustryModule)},
  {path: 'instrument' , loadChildren: () => import('./features/instrument/instrument.module').then(m=> m.InstrumentModule )},
  {path: 'letter' , loadChildren: () => import('./features/letter-type/letter-type.module').then(m=> m.LetterTypeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
