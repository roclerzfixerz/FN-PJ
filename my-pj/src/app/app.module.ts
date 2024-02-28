import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { StepsModule } from 'primeng/steps';
import { MonthComponent } from './month/month.component';
import { FormsModule } from '@angular/forms';
import { YearComponent } from './year/year.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { ReadonlyComponent } from './readonly/readonly.component';

@NgModule({
  declarations: [
    
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    ReadonlyComponent
  ],
  imports: [
    FormsModule,
    StepsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
