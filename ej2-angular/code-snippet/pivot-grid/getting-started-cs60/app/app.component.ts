

import { Component } from '@angular/core';
import { IDataOptions, PivotView, CellEditSettings, PivotActionBeginEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',  
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings (actionBegin)='actionBegin($event)' [editSettings]=editSettings width=width></ejs-pivotview>`
})

export class AppComponent {

    public width: string;
    public editSettings: CellEditSettings
    public dataSourceSettings: IDataOptions;

    actionBegin(args: PivotActionBeginEventArgs): void {
        if (args.actionName == 'Add new record' && args.actionName == 'Save edited records') {
            args.cancel = true;
        }
    }

    ngOnInit(): void {

        this.width = "100%";
        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.editSettings= { allowAdding: true, allowDeleting: true, allowEditing: true, mode: 'Dialog' }
    }
 }



