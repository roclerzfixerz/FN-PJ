import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  title = 'my-pj';

  currentYear: any;
  currentMonth: any;
  years: number[] = [];
  selectedMonth: any;
  selectedYear: any;
  months: string[];
  vatRemittedValue: string = '';
  fixedPenalty: string = '200.00';
  surchargeValue: string = '0.00';
  constructor(private monthComponent: MonthComponent,
    private yearComponent: YearComponent,
    private saleAmountComponent: SaleAmountComponent) {


    this.months = monthComponent.months;


  }

  handleKeyPress(event: KeyboardEvent) {
    this.saleAmountComponent.onInputKeyPressNo(event);
  }

  number(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    this.saleAmountComponent.formatNumber(keyboardEvent);
  }

  calculateVat(event: any): void {
    let inputValue = event.target.value;

    // Remove commas from the input value
    inputValue = inputValue.replace(/,/g, '');

    // Convert the cleaned input value to a number and calculate 7% of it
    const vatValue = Number(inputValue) * 0.07;

    // Format the VAT value to two decimal places and replace it back in the model
    this.vatRemittedValue = vatValue.toFixed(2);
  }

  calculateVatAndSurcharge(event: any): void {
    let inputValue = event.target.value.replace(/,/g, ''); // Remove commas

    // Calculate VAT (existing logic)
    const vatValue = Number(inputValue) * 0.07;
    this.vatRemittedValue = vatValue.toFixed(2);

    // Calculate Surcharge: taxableValue multiplied by 0.1 and round to two decimal places
    const surcharge = Number(inputValue) * 0.1;
    this.surchargeValue = surcharge.toFixed(2); // Update Surcharge value
  }

  calculateSurcharge(): void {
    if (this.vatRemittedValue) {
      // Parse the VAT Remitted value as a float, multiply by 0.1, and round to 3 decimal places
      const surcharge = Math.round((parseFloat(this.vatRemittedValue) * 0.1 + Number.EPSILON) * 1000) / 1000;
      // Update the surcharge value, ensuring it is a string with two decimal places
      this.surchargeValue = surcharge.toFixed(2);
    }
  }


  ngOnInit(): void {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed

    // Populate the years array with values from 2020 to the current year
    for (let year = 2020; year <= this.currentYear; year++) {
      this.years.push(year);
    }
  }

  isMonthDisabled(monthIndex: number): boolean {
    // Disable months that are in the future for the current year
    return this.currentYear === new Date().getFullYear() && monthIndex > this.currentMonth;
  }

  currentStep = 1;
  nextStep(): void {
    this.currentStep++;
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
    if (this.currentStep > 2) {
      this.currentStep--;
    }
  }


  //   items:any; 
  //     activeIndex: number = 1;
  //   messageService: any;

  //   ngOnInit() {
  //     this.items = [
  //       {label: 'Input Detail'},
  //       {label: 'Review & Confirm'}
  //     ];
  // } 

}







