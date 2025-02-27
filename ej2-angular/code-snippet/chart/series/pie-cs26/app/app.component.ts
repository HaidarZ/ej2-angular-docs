

import { Component, OnInit } from '@angular/core';
import { dataMapping } from 'datasource.ts';
@Component({
    selector: 'app-container',
    template:
    `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings' [enableBorderOnMouseMove]='enableBorderOnMouseMove'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[];
    public datalabel: Object;
    public legendSettings: Object;
    public enableBorderOnMouseMove: boolean;
    ngOnInit(): void {
        this.enableBorderOnMouseMove = false;
        this.piedata = dataMapping;
        this.datalabel = { visible: true, name: 'text', position: 'Outside' };
        this.legendSettings = {
            visible: false
        };
    }

}


