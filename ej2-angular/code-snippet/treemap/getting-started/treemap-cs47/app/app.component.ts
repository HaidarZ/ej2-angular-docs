

import { TreeMap } from '@syncfusion/ej2-treemap';
import { Component, ViewChild} from '@angular/core';
import { PrintService } from '@syncfusion/ej2-angular-treemap';
@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' #treemap [allowPrint]=true style='display: block;'  [dataSource]='data' weightValuePath='GDP'
    [leafItemSettings]='leafItemSettings'>
    </ejs-treemap>  <div>
    <button id="togglebtn2" (click)='print()'>Print</button>
    </div>`,
    providers: [PrintService]
})
export class AppComponent {
    @ViewChild('treemap')
    public treemap: TreeMap;
    public data: object[] = [
    {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
    ];
    public leafItemSettings: object = {
        labelPath: 'State',
            labelFormat: '${State}<br>$${GDP} Trillion<br>(${percentage} %)',
            labelStyle: {
                color: '#000000'
            },
            border: {
                color: '#000000',
                width: 0.5
            },
    };
    public print() {
        this.treemap.print();
    }
}



