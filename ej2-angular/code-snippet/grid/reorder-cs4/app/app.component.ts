

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template:
        `<ejs-grid #grid [dataSource]='data' [allowReordering]='true' height='280px'
         (columnDragStart)="columnDragStart()" (columnDrag)="columnDrag()" (columnDrop)="columnDrop()">
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public gridObj: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    columnDrop() {
        alert('columnDrop event is Triggered');
    }
    columnDragStart() {
        alert('columnDragStart event is Triggered');
    }
    columnDrag() {
        alert('columnDrag event is Triggered');
    }
}



