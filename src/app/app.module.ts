import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {ShareModule} from "./share/share.module";
import {DailyPriceModule} from "./features/daily-price/daily-price.module";
import {DashbordModule} from "./features/dashbord/dashbord.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    ShareModule,
    DailyPriceModule,
    DashbordModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
