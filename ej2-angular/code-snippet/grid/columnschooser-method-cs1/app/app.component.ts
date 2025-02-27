

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: ` <button id='show' ej-button class='e-flat' (click)='show()'> open Column Chooser </button>
                <ejs-grid #grid [dataSource]='data' [height]='280' [showColumnChooser]= 'true'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
                        <e-column field='CustomerName' headerText='Customer Name' width='150' [showInColumnChooser]='false'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="right"></e-column>
                        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' [visible]='false' width='150'></e-column>
                        <e-column field='ShipCity' headerText='Ship City' [visible]='false' width='150'></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    show() {
        this.grid.columnChooserModule.openColumnChooser(200, 50); // give X and Y axis
    }
}



