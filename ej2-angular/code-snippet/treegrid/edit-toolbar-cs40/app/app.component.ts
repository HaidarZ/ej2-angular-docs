

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' id='TreeGrid' #treegrid height='220' [treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions' (created)="created($event)">
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: string[];

    @ViewChild('treegrid')
    public treegrid: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData.slice(0, 2);
        this.toolbarOptions = ['Print', 'Search'];
    }

    created() {
    let toolbarOptions: HTMLElement = this.treegrid.element.querySelector('.e-toolbar');
    this.treegrid.element.appendChild(toolbarOptions);
    }
}



