

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='2' childMapping='subtasks'
    height='315px' [selectionSettings]='selectionOptions' >
        <e-columns>
                <e-column type='checkbox' width='50'></e-column>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public selectionOptions: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.selectionOptions = { checkboxMode: 'ResetOnRowClick'};
    }
}



