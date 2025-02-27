

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, getRangeAddress } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { dataSource1 } from './datasource';

enableRipple(true);

@Component({
    selector: 'app-container',
    template: `<ejs-spreadsheet #spreadsheet (created)="created()"  (cellEdit)="cellEdit()" [selectionSettings]="{ mode: 'Multiple' }">
                <e-sheets>
                  <e-sheet name="Price Details">
                    <e-ranges>
                      <e-range [dataSource]="priceData"></e-range>
                    </e-ranges>
                    <e-columns>
                      <e-column [width]=130></e-column>
                      <e-column [width]=92></e-column>
                      <e-column [width]=96></e-column>
                    </e-columns>
                  </e-sheet>
                </e-sheets>
              </ejs-spreadsheet>`
})
export class AppComponent {
    @ViewChild('spreadsheet')
    spreadsheetObj: SpreadsheetComponent;

    priceData: object[] = dataSource1;

    created() {
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        var colCount = this.spreadsheetObj.getActiveSheet().colCount;
        this.spreadsheetObj.selectRange(getRangeAddress([4, 0, 4, colCount]));
    }
    cellEdit(args) {
        args.cancel = true;
    }
}


