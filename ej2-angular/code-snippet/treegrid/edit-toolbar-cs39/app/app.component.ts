

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `
      <button ejs-button (click)='enableClick()'>Enable</button>
      <button ejs-button (click)='disableClick()'>Disable</button>
    <ejs-treegrid [dataSource]='data' #treegrid height='220' [allowFiltering]='true' (toolbarClick)='toolbarClick($event)' [allowPaging]='true' pageSettings='pager'[treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public toolbarOptions: ToolbarItems[];
    public pager: Object;
    @ViewChild('treegrid')
    public treeGridObj: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['QuickFilter', 'ClearFilter'];
        this.pager = { pageSize: 8 }
    }

    toolbarClick(args: Object): void{
        if (args.item.text === 'QuickFilter') {
            this.treeGridObj.filterByColumn('taskName', 'startswith', 'Testing');
        }
        if (args.item.text === 'ClearFilter') {
            this.treeGridObj.clearFiltering();
        }
    }
    enableClick() {
        this.treeGridObj.toolbarModule.enableItems([this.treeGridObj.element.id + '_gridcontrol_QuickFilter', this.treeGridObj.element.id + '_gridcontrol_ClearFilter'], true);// enable toolbar items.
    };

    disableClick() {
        this.treeGridObj.toolbarModule.enableItems([this.treeGridObj.element.id + '_gridcontrol_QuickFilter', this.treeGridObj.element.id + '_gridcontrol_ClearFilter'], false);// disable toolbar items.
    };
}



