

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { SortEventArgs  } from '@syncfusion/ej2-angular-grids';

let action: string;

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' allowSorting='true' (actionBegin)='actionBegin($event)' >
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' width='100'></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
                        <e-column field='OrderDate' headerText='Order Date' format='yMd'
                        [sortComparer]='sortComparer'  width='120'></e-column>
                        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
                    </e-columns>
                </ejs-grid>`
})

export class AppComponent implements OnInit {

    public data: object[];
    ngOnInit(): void {
        this.data = data;
    }
    actionBegin(args: SortEventArgs) {
        if (args.requestType === 'sorting') {
            action = args.direction;
        }
    }
    sortComparer(reference, comparer) {
        const sortAsc = action === 'Ascending' ? true : false;
        if (sortAsc && reference === null) {
            return 1;
        } else if (sortAsc && comparer === null) {
            return -1;
        } else if (!sortAsc && reference === null) {
            return -1;
        } else if (!sortAsc && comparer === null) {
            return 1;
        } else {
            return reference - comparer;
        }
    }
}



