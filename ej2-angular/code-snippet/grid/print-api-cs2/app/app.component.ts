

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { ToolbarItems, PageSettingsModel, GridComponent, Column } from '@syncfusion/ej2-angular-grids';


@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' (toolbarClick)='toolbarClick()' (printComplete)='printComplete()'
                [allowPaging]='true' [pageSettings]='pageOptions' [toolbar]='toolbarOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' [visible]= 'false' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public toolbarOptions: ToolbarItems[];
    public pageOptions: PageSettingsModel;
    @ViewChild('grid') public grid: GridComponent;
    toolbarClick() {
        for (const columns of this.grid.columns) {
            if ((columns as Column).field === 'CustomerID') {
                (columns as Column).visible = true;
            } else if ((columns as Column).field === 'ShipCity') {
                (columns as Column).visible = false;
            }
        }
    }

    printComplete() {
        for (const columns of this.grid.columns) {
            if ((columns as Column).field === 'CustomerID') {
                (columns as Column).visible = false;
            } else if ((columns as Column).field === 'ShipCity') {
                (columns as Column).visible = true;
            }
        }
    }

    ngOnInit(): void {
        this.data = data;
        this.toolbarOptions = ['Print'];
        this.pageOptions = { pageSize: 6 };
    }
}




