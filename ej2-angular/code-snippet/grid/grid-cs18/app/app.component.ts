

import { Component, OnInit } from '@angular/core';
import { complexData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315'>
                    <e-columns>
                        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='Name.FirstName' headerText='First Name' width=120></e-column>
                        <e-column field='Name.LastName' headerText='Last Name' width=120></e-column>
                        <e-column field='Title' headerText='Title' width=150></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];

    ngOnInit(): void {
        this.data = complexData;
    }
}



