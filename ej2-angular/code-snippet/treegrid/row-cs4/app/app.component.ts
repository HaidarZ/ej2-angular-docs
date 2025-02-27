import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<div>
    <div style="float:left;width:49%">
        <ejs-treegrid id='TreeGrid' [dataSource]='data' [allowRowDragAndDrop]='true' height='315' [treeColumnIndex]='1' [rowDropSettings]='rowDrop'
         [selectionSettings]='selectionSettings'
         childMapping='subtasks' >
            <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
    <div style="float:left;width:49%">
        <ejs-treegrid id='destTree' height='315' [allowRowDragAndDrop]='true' [treeColumnIndex]='1' [rowDropSettings]='rowDrops' childMapping='subtasks'
        [selectionSettings]='selectionSettings'
        >
            <e-columns>
                    <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
    </div>
    `
})
export class AppComponent implements OnInit {
    public data: Object[];
    public rowDrop: Object;
    public rowDrops: Object;
    public selectionSettings: Object;
    ngOnInit(): void {
        this.data = sampleData;
        this.selectionSettings = { type: 'Multiple' };
        this.rowDrop = { targetID: 'destTree' };
        this.rowDrops = { targetID: 'TreeGrid' };
    }
}