import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)},
  {path: 'dashbord', loadChildren: () => import('./features/dashbord/dashbord.module').then(m => m.DashbordModule)},
  {path: 'day', loadChildren: () => import('./features/daily-price/daily-price.module').then(m => m.DailyPriceModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
