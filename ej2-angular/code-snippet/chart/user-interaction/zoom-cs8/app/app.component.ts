


import { Component, OnInit } from '@angular/core';
import { series1 } from 'datasource.ts';

@Component({
    selector: 'app-container',
    template:
    `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [zoomSettings]='zoom' [legendSettings]='legend'>
        <e-series-collection>
            <e-series [dataSource]='chartData' type='Area' xName='x' yName='y' name='Product X' [border]='border' [animation]='animation' opacity=0.3></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis: Object;
    public chartData: Object[];
    public primaryYAxis: Object;
    public zoom: Object;
    public animation: Object;
    public legend: Object;
    ngOnInit(): void {
        this.chartData = series1;
        this.primaryXAxis = {
            valueType: 'DateTime',
            labelFormat: 'yMMM',
            zoomFactor: 0.2, zoomPosition: 0.6
        };
        this.zoom = {
            enableSelectionZooming: true,
            enablePan: true
        };
        this.animation = { enable: false};
        this.legend = { visible: false };

    }

}


