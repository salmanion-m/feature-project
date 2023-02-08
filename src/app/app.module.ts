import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {ShareModule} from "./share/share.module";
import {DashbordModule} from "./features/dashbord/dashbord.module";
import {FundModule} from "./features/fund/fund.module";
import {IndustryModule} from "./features/industry/industry.module";
import {InstrumentModule} from "./features/instrument/instrument.module";
import {LetterTypeModule} from "./features/letter-type/letter-type.module";
import {UsersModule} from "./features/users/users.module";
import {UsersService} from "./features/users";
import {AuthInterceptor} from "./core";
import {DailyPriceModule} from "./features/daily-price/daily-price.module";

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
    FundModule,
    IndustryModule,
    InstrumentModule,
    LetterTypeModule,
    UsersModule
  ],
  schemas: [ NO_ERRORS_SCHEMA  ],
  providers: [UsersService,
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
