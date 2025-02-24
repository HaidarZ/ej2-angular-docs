

import { Component, OnInit } from '@angular/core';
import { EditSettingsModel, ToolbarItems, IEditCell } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [editSettings]='editSettings' [toolbar]='toolbar' height='273px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign= 'Right'
                     editType= 'numericedit' [edit]='numericParams' width=120 format= 'C2'></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' [edit]='ddParams' width=150></e-column>
                    <e-column field='OrderDate' headerText='Order Date' editType= 'datepickeredit' [edit]='dpParams' width=150></e-column>
                    <e-column field='Verified' headerText='Verified' editType= 'booleanedit' [edit]='boolParams' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public editSettings: EditSettingsModel;
    public toolbar: ToolbarItems[];
    public numericParams: IEditCell;
    public ddParams: IEditCell;
    public dpParams: IEditCell;
    public boolParams: IEditCell;

    ngOnInit(): void {
        this.data = data;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.numericParams = { params: { decimals: 2, value: 5 } };
        this.ddParams = { params: { value: 'Germany' } };
        this.dpParams = { params: {value: new Date() } };
        this.boolParams = { params: {checked: true } };
    }
}




