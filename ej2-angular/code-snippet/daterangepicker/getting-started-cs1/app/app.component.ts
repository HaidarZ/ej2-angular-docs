

import { Component,HostListener,ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ejs-daterangepicker #ejDateRangePicker placeholder='Select a range'></ejs-daterangepicker>
        `
})

export class AppComponent {
   @ViewChild('ejDateRangePicker') ejDateRangePicker: CalendarComponent;
   @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === 84 /* t */) {
        // press alt+t to focus the control.
        this.ejDateRangePicker.inputElement.focus();
    }
  }
    constructor() {
    }
}


