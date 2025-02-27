


import { Component, OnInit } from '@angular/core';
import { chartData } from 'datasource.ts'

@Component({
    selector: 'app-container',
    template:
    `<ejs-rangenavigator id="rn-container" valueType='DateTime' [periodSelectorSettings]='periodsValue'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='close' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public periodsValue: Object[];
    public chartData: Object[];
    ngOnInit(): void {
        this.periodsValue = {
                                position: 'Top',
                                periods: [
                                    { text: '1M', interval: 1, intervalType: 'Months' }, { text: '3M', interval: 3, intervalType: 'Months' },
                                    { text: '6M', interval: 6, intervalType: 'Months' }, { text: 'YTD' },
                                    { text: '1Y', interval: 1, intervalType: 'Years' },
                                    { text: '2Y', interval: 2, intervalType: 'Years', selected: true
                                    },
                                    { text: 'All' }
                                ]
                            };
        this.chartData = chartData;
    }
}



