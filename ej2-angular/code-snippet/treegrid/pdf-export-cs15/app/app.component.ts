

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, PdfExportProperties, RowDataBoundEventArgs, PdfQueryCellInfoEventArgs } from '@syncfusion/ej2-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='220' (toolbarClick)='toolbarClick($event)' [allowPaging]='true' [allowPdfExport]='true' [pageSettings]='pager' [treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions'>
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
    public pager: Object;
    @ViewChild('treegrid')
    public treeGridObj: TreeGridComponent;
    public toolbarOptions: ToolbarItems[];

    ngOnInit(): void {
        this.data = sampleData;
        this.pager = { pageSize: 7 };
        this.toolbarOptions = ['PdfExport'];
    }
    toolbarClick(args: Object) : void {
        if (args['item'].text === 'PDF Export') {
            let exportProperties: PdfExportProperties = {
                dataSource: sampleData,
            };
            this.treeGridObj.pdfExport(exportProperties);
        }
    }
}



