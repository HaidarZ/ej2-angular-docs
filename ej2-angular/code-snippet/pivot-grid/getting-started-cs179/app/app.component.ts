

import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet, HyperlinkSettings } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';

@Component({
  selector: 'app-container',
  // specifies the template string for the pivot table component
  template: `<ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [hyperlinkSettings]=hyperlinkSettings width=width (hyperlinkCellClick)='hyperlinkCellClicked($event)'></ejs-pivotview>`
})
export class AppComponent implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;
    public hyperlinkSettings: HyperlinkSettings;

    hyperlinkCellClicked(args: any) {
        args.cancel = false;
        args.currentCell.setAttribute("data-url", "https://ej2.syncfusion.com/");//here we have redirected to EJ2 Syncfusion on hyperlinkcell click
    }
    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.hyperlinkSettings = {
           showRowHeaderHyperlink: true,
           cssClass: 'e-custom-class'
        } as HyperlinkSettings;
        this.width = '100%';
    }
}



