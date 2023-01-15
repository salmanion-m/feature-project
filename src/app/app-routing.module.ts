import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
export class AppRoutingModule { }
