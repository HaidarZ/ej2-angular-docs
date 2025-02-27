


import { Component, OnInit, ViewChild } from '@angular/core';
import { createElement } from '@syncfusion/ej2-base';
import { GridComponent, ForeignKeyService, FilterService, IFilter, FilterSettingsModel, Filter } from '@syncfusion/ej2-angular-grids';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { data, fEmployeeData } from './datasource';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' [height]='315' [allowFiltering]='true'
        [filterSettings]='filteroption'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                        <e-column field='EmployeeID' headerText='Employee Name' width=120
                        foreignKeyValue='FirstName' [dataSource]='employeeData' [filter]='filter'></e-column>
                        <e-column field='Freight' headerText='Freight' textAlign='Right' width=80></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
                    </e-columns>
                </ejs-grid>`,
    providers: [ForeignKeyService, FilterService]
})
export class AppComponent implements OnInit {

    public data: object[];
    @ViewChild('grid') public grid: GridComponent;
    public employeeData: object[];
    public dropInstance: DropDownList;
    public filteroption: FilterSettingsModel = { type: 'Menu'};
    public filter: IFilter = {
        ui: {
            create: (args: { target: Element, column: object }) => {
                const flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                args.target.appendChild(flValInput);
                this.dropInstance = new DropDownList({
                    dataSource: new DataManager(fEmployeeData),
                    fields: { text: 'FirstName', value: 'EmployeeID' },
                    placeholder: 'Select a value',
                    popupHeight: '200px'
                });
                this.dropInstance.appendTo(flValInput);
            },
            write: (args: {
                column: object, target: Element, parent: any,
                filteredValue: number | string
            }) => {
                this.dropInstance.text = args.filteredValue as string || '';
            },
            read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.text);
            }
        }
    };
    ngOnInit(): void {
        this.data = data;
        this.employeeData = fEmployeeData;
    }
}



