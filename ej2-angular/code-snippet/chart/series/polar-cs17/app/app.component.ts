

import { Component, OnInit } from '@angular/core';
import { radarData } from 'datasource.ts';

@Component({
    selector: 'app-container',
    template:
    ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
            <e-series [dataSource]='data' type='Radar' xName='x' yName='y' drawType='Line'>
            </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis: Object;
    public title: string;
    public data: Object[];
    ngOnInit(): void {
        this.data = radarData;
        this.primaryXAxis = {
            title: 'Year',
            minimum: 2004, maximum: 2012, interval: 1,
            labelPlacement: 'OnTicks'
            labelStyle: {
                  color: 'blue'
                }
            };
        this.title = 'Efficiency of oil-fired power production';
    }
}



