

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' [customAttributes]="{class: 'e-attr'}"
                         textAlign='Right' width=100></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                        <e-column field='ShipCity' headerText='Ship City' [customAttributes]="{class: 'e-attr'}" width=130 ></e-column>
                        <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-grid>`,
    styleUrls: ['./app/app.style.css']
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = data;
    }
}



