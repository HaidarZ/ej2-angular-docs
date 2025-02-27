

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { FilterService, PageService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<button ej-button id='add' (click)='addColumn()'>Add Columns</button>
               <button ej-button id='remove' (click)='removeColumn()'>Remove Columns</button>
               <ejs-grid #grid id="Grid" [dataSource]='data' [enablePersistence]='true' [allowPaging]='true' height='210px' (dataBound)='dataBound()'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`,
    providers: [FilterService, PageService]
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }
    dataBound() {
        let cloned = this.grid.addOnPersist;
        this.grid.addOnPersist = function (key: any) {
            key = key.filter((item: string)  => item !== "columns");
            return cloned.call(this, key);
        };
    }

    addColumn() {
        let obj = { field: "Freight", headerText: 'Freight', width: 120 }
        this.grid.columns.push(obj as any); //you can add the columns by using the Grid columns method
        this.grid.refreshColumns();
   }

    removeColumn() {
        this.grid.columns.pop();
        this.grid.refreshColumns();
   }
}



