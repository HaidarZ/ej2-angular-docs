

import { Component, OnInit } from '@angular/core';
import { IAccTextRenderEventArgs, IAccPointRenderEventArgs } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template:
    `<ej-accumulationchart id="chart-container" (textRender)="onTextRender($event)" (pointRender)="onPointRender($event)">
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' groupTo='11' [dataLabel]='datalabel'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ej-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata: Object[];
    public datalabel: Object;
    public onTextRender: Function;
    public onPointRender: Function;
    ngOnInit(): void {
        this.datalabel = { visible: true, name: 'text', position: 'Outside' };
        this.onTextRender = (args: IAccTextRenderEventArgs): void {
            if (args.text.indexOf('Others') > -1) {
                args.color = 'red';
                args.border.width = 1;
            }
        }
        this.onPointRender = (args: IAccPointRenderEventArgs): void {
            if ((args.point.x as string).indexOf('Others') > -1) {
                args.fill = '#D3D3D3';
            }
        }
        this.piedata = [
                { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
                { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
                { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
                { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }];
    }

}


