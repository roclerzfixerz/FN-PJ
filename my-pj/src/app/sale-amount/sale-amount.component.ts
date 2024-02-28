import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class SaleAmountComponent implements OnInit {
  invalidNoInput: boolean | undefined;
  vatRemittedValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  
  
  onInputKeyPressNo(event: KeyboardEvent): boolean {
    // ตรวจสอบว่า event.target ไม่เป็น null และเป็นประเภท HTMLInputElement
    if (event.target && event.target instanceof HTMLInputElement) {
      const inputChar = event.key;
      const currentValue = event.target.value;
      // Allow only digit characters and dot (.)
      const isDigitOrDot = /^[\d.]$/.test(inputChar);
      if (!isDigitOrDot) {
        // Prevent input if it's not a digit or a dot
        event.preventDefault();
      }
      // Return true if it's a digit or a dot, otherwise false
      return isDigitOrDot;
    }
    return false;
  }
  
  
  formatNumber(event: any) {
    let value = event.target.value;
    // ลบอักขระที่ไม่ใช่ตัวเลขและไม่ใช่จุดออก
    value = value.replace(/[^\d.]/g, '');
  
    // แยกส่วนของจำนวนเต็มและทศนิยม
    let [whole, decimal] = value.split('.');
  
    // จำกัดทศนิยมไม่เกิน 2 ตำแหน่ง
    if (decimal?.length > 2) {
      decimal = decimal.substring(0, 2);
    }
  
    // จัดรูปแบบจำนวนเต็มเป็นรูปแบบที่มีคอมม่า
    if (whole.length >= 3) {
      whole = parseInt(whole).toLocaleString();
    }
  
    // รวมส่วนของจำนวนเต็มและทศนิยมกลับเข้าด้วยกัน
    event.target.value = decimal !== undefined ? `${whole}.${decimal}` : whole;
  }

 
  
  
  

}
