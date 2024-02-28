import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
@Injectable({
  providedIn: 'root'
})

  
export class MonthComponent implements OnInit {
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  currentYear: any;
  currentMonth: any;
  years: number[] = [];
  

  constructor() { }

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
}
