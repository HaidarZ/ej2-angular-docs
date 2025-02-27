

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { DataManager } from '@syncfusion/ej2-data';
import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { FilterSettingsModel, IFilter, Filter, GridComponent } from '@syncfusion/ej2-angular-grids';

MultiSelect.Inject(CheckBoxSelection);

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' #grid [allowFiltering]='true' [filterSettings]='filterOptions'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' [filter]= 'filter' textAlign='Right' width=100></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data: object[];
    public filteredValue: object[];
    public filterOptions: FilterSettingsModel;
    public filter: IFilter;
    public dropInstance: MultiSelect;
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.filterOptions = {
            type: 'Menu'
        };
        this.filter = {
            ui: {
                create: (args: { target: Element, column: object }) => {
                    let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(flValInput);
                    this.dropInstance = new MultiSelect({
                        dataSource: new DataManager(data),
                        fields: { text: 'OrderID', value: 'OrderID' },
                        placeholder: 'Select a value',
                        popupHeight: '200px',
                        allowFiltering: true,
                        mode: 'CheckBox',
                    });
                    this.dropInstance.appendTo(flValInput);
                },
                write: (args: {
                    column: object, target: Element, parent: any,
                    filteredValue: number[] | string[]
                }) => {
                    let filteredValue = [];
                    this.grid.filterSettings.columns.map((item) => {
                        if (item.field === 'OrderID' && item.value){
                            filteredValue.push((item as any).value);
                        }
                    });
                    if (filteredValue.length > 0){
                        this.dropInstance.value = filteredValue;
                    }
                },
                read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                    this.grid.removeFilteredColsByField(args.column.field);
                    args.fltrObj.filterByColumn(
                        args.column.field,
                        'contains',
                        this.dropInstance.value
                    );
                },
            },
        };
    }
}



