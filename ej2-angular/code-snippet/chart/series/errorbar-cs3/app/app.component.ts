

import { Component, OnInit } from '@angular/core';
import { errorData } from 'datasource.ts';

@Component({
    selector: 'app-container',
    template:
    `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Line' xName='x' yName='y' name='India' width=2 [marker]='marker' [errorBar]='errorBar'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public chartData: Object[];
    public title: string;
    public marker: Object;
    public errorBar: Object;
    ngOnInit(): void {
        this.chartData = errorData;
        this.marker = { visible: true };
        this.errorBar = { visible: true, type: 'Custom',
            mode:'Both'
            verticalPostiveError:3,
            horizontalPositiveError:2,
            verticalNegativeError:3,
            horizontalNegativeError:2
        };
        this.title = 'Unemployment rate (%)';
    }

}



