

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
                </e-columns>
               </ejs-grid>`,
    styles: [`
        .e-grid td.e-active {
            background-color: #f9920b;
        }
    `]
})
export class AppComponent implements OnInit {
    public data: object[];

    ngOnInit(): void {
        this.data = data.slice(0, 8);
    }
}



