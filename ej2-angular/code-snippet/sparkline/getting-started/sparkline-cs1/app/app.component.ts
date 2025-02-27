


import { Component } from '@angular/core';
import { TooltipSettingsModel } from '@syncfusion/ej2-sparkline';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='350px' height='200px' [border]= 'border' [containerArea]='containerArea' [dataSource]="data" fill= '#b2cfff' type="Area">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [3, 6, 4, 1, 3, 2, 5];
    public containerArea: object= {
        border: { color: '#033e96', width: 2 }
    };
    public border: object= { color: '#033e96', width: 1 };
}



