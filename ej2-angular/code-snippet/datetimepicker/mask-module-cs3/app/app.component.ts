


import { Component } from '@angular/core';
import { MaskedDateTimeService } from '@syncfusion/ej2-angular-calendars';
@Component({
    selector: 'app-root',
    templateUrl: './app/maskplaceholder.html',
    providers: [MaskedDateTimeService],
})
export class AppComponent {
constructor( ) {
    }
    public enableMaskSupport: boolean = true;
    public maskPlaceholderValue: Object = {day: 'd', month: 'M', year: 'y', hour: 'h', minute: 'm', second: 's'}
}


