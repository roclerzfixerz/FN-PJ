import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class YearComponent implements OnInit {
  
  currentYear: any;
  years: number[] = [];
  currentMonth: any;
  

  constructor() { }

  ngOnInit(): void {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    

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
