

import { Component,HostListener,ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <ejs-datepicker #ejDatePicker [value]='dateValue' placeholder='Enter date'></ejs-datepicker>
        `
})

export class AppComponent {
   @ViewChild('ejDatePicker') ejDatePicker: CalendarComponent;
    public dateValue: Date = new Date();
    @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.altKey && event.keyCode === 84 /* t */) {
        // press alt+t to focus the control.
        this.ejDatePicker.focusIn();
    }
  }
    constructor() {
    }
}


