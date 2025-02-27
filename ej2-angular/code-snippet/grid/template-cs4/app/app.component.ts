

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, RowDataBoundEventArgs, DetailRowService } from '@syncfusion/ej2-angular-grids';
import { DataManager, Query, DataResult } from '@syncfusion/ej2-data';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #Grid [dataSource]='data' [childGrid]='childGrid' (rowDataBound)="rowDataBound($event)">
                    <e-columns>
                        <e-column field='EmployeeID' headerText='EmployeeID' width='120' ></e-column>
                        <e-column field='FirstName' headerText='First Name'  width='150' ></e-column>
                        <e-column field='Title' headerText='Title' width='120' textAlign='Right'></e-column>
                        <e-column field='City' headerText='City' width='120' textAlign='Right'></e-column>
                        <e-column field='Country' headerText='Country' width='120' textAlign='Right'></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [DetailRowService]
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('Grid') public Grid: GridComponent;
    public childGrid: object;
    public dataManager: object[] = [{Order: 100, ShipName: 'Berlin', EmployeeID: 2},
                                 {Order: 101, ShipName: 'Capte', EmployeeID: 3},
                                 {Order: 102, ShipName: 'Marlon', EmployeeID: 4},
                                 {Order: 103, ShipName: 'Black pearl', EmployeeID: 5},
                                 {Order: 104, ShipName: 'Pearl', EmployeeID: 6},
                                 {Order: 105, ShipName: 'Noth bay', EmployeeID: 7},
                                 {Order: 106, ShipName: 'baratna', EmployeeID: 8},
                                 {Order: 107, ShipName: 'Charge', EmployeeID: 9}];

    ngOnInit(): void {
      this.data = employeeData;
      this.childGrid = {
          dataSource: this.dataManager,
          queryString: 'EmployeeID',
          allowPaging: true,
          columns: [
              { field: 'Order', headerText: 'Order ID', textAlign: 'Right', width: 120 },
              { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
              { field: 'ShipName', headerText: 'Ship Name', width: 150 }
          ]
      };
    }
    public rowDataBound(args: RowDataBoundEventArgs) {
        const EmployeeID = 'EmployeeID';
        const filter: string = args.data[EmployeeID];
        const childrecord: any = new DataManager(this.Grid.childGrid.dataSource as JSON[]).
        executeLocal(new Query().where('EmployeeID', 'equal', parseInt(filter, 10), true));
        if (childrecord.length === 0) {
            // here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = ' ';
            args.row.querySelector('td').className = 'e-customizedExpandcell';
        }
    }
}



