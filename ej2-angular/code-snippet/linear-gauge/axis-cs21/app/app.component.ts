

import { Component } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { IMouseEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" (gaugeMouseLeave)='gaugeMouseLeave($event)'>
    </ejs-lineargauge>`
})
export class AppComponent {
    gaugeMouseLeave(args: IMouseEventArgs) {
    }
}


