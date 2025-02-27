

import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { enableRipple } from '@syncfusion/ej2-base';
import { dataSource1 } from './datasource';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

enableRipple(true);

@Component({
    selector: 'app-container',
    template: `<button ejs-dropdownbutton [items]='items' content='Clipboard' (select)='itemSelect($event)'></button>
    <ejs-spreadsheet #spreadsheet (created)="created()" (actionBegin)="actionBeginHandler($event)" [enableClipboard]="true">
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
    public items: ItemModel[] = [
        {
          text: "Copy"
        },
        {
          text: "Cut"
        },
        {
          text: "Paste"
        }];

    created() {
        this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
    }
    // Triggers before the action begins.
    actionBeginHandler(pasteArgs) {
      // To cancel the paste action.
        if (pasteArgs.args.eventArgs.requestType === 'paste') {
            pasteArgs.args.eventArgs.cancel = true;
        }
    }
    public itemSelect(args: MenuEventArgs) {
    if (args.item.text === 'Copy')
      this.spreadsheetObj.copy();
    if (args.item.text === 'Cut')
      this.spreadsheetObj.cut();
    if (args.item.text === 'Paste')
      this.spreadsheetObj.paste();
  }
}


