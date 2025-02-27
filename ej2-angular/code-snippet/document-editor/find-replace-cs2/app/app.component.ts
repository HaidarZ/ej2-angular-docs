

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SelectionService, EditorService, SearchService, OptionsPaneService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div style="width:100%;">
      <table>
          <tr>
              <td>
                  <label>Text to find:</label>
              </td>
              <td>
                  <input type="text" id="find_text" />
              </td>
          </tr>
          <tr>
              <td>
                  <label>Text to replace:</label>
              </td>
              <td>
                  <input type="text" id="replace_text" />
              </td>
          </tr>
          <tr>
              <td colspan="2">
                  <button ejs-button (click)="onReplaceButtonClick()" >Replace all</button>
              </td>
          </tr>
      </table>
      <ejs-documenteditor #document_editor id="container" height="330px" style="display:block" [enableSelection]=true [enableSearch]=true [enableEditor]=true [isReadOnly]=false (created)="onCreated()"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [SelectionService, EditorService, SearchService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    onCreated(): void {
        if (this.documentEditor.isDocumentLoaded) {
            let sfdt: string = `{
            "sections": [
                {
                    "blocks": [
                        {
                            "inlines": [
                                {
                                    "characterFormat": {
                                        "bold": true,
                                        "italic": true
                                    },
                                    "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                }
                            ]
                        }
                    ]
                }
            ]
        }`;
            this.documentEditor.open(sfdt);
        }
    }

    public onReplaceButtonClick(): void {
        let textToFind: string = (document.getElementById('find_text') as HTMLInputElement).value;
        let textToReplace: string = (document.getElementById('replace_text') as HTMLInputElement).value;
        if (textToFind !== '') {
            // Find all the occurences of given text
            this.documentEditor.searchModule.findAll(textToFind);
            if (this.documentEditor.searchModule.searchResults.length > 0) {
                // Replace all the occurences of given text
                this.documentEditor.searchModule.searchResults.replaceAll(textToReplace);
            }
        }
    }
}


