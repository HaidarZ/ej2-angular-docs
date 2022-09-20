

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ej-accumulationchart id="chart-container" [enableSmartLabels]='enableSmartLabels'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ej-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[];
    public datalabel: Object;
    public enableSmartLabels: boolean;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Outside', template: '<div>${point.x}</div><div>${point.y}</div>' };
        this.enableSmartLabels = true;
        this.piedata = [
                { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
                { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
                { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
                { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }];
    }

}


