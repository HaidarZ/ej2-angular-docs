import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: ` <button ej-button id='click' (click)='click()'>Get Columns and records</button>
  <ejs-treegrid #treegrid id="TreeGrid" [dataSource]='data' [toolbar]="toolbar" [treeColumnIndex]='1' [showColumnChooser]='true' height='270' childMapping='subtasks'>
      <e-columns>
          <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
          <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
          <e-column field='priority' headerText='Priority' textAlign='Right' width=90></e-column>
          <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' width=90>
          </e-column>
          <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
      </e-columns>
  </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data: object[] = [];
    @ViewChild('treegrid')

    public treegrid: TreeGridComponent;
    public toolbar: string[];
    ngOnInit(): void {
        this.data = sampleData;
        this.toolbar = ['ColumnChooser'];
    }
    click() {
        var visiblColumns: object[] = this.treegrid.getVisibleColumns(); // get visible columns
        var columnsCount: number = visiblColumns.length;
        var visibleRecords: object[] = this.treegrid.getVisibleRecords(); //get visible records
        var visibleRecordsCount: number = visibleRecords.length
        alert('Columns Count : ' + columnsCount + ' and Row count : ' + '' + visibleRecordsCount);
    }
}