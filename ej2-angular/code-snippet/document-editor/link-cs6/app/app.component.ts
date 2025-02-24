

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, PrintService, SelectionService, EditorService, EditorHistoryService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      template: `<div>
      <button ejs-button (click)="onPrint()" >Print</button>
      <ejs-documenteditor #document_editor height="330px" style="display:block" [isReadOnly]=true [enableSelection]=true [enableEditor]=true [enablePrint]=true (created)="onCreated()"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [PrintService, SelectionService, EditorService, EditorHistoryService]
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
                                        "text": "Hello World"
                                    }
                                ]
                            }
                        ],
                        "headersFooters": {
                        }
                    }
                ]
            }`;
            //Open the document content.
            this.documentEditor.open(sfdt);
        }
    }

    public onPrint(): void {
        //Print the document content.
        this.documentEditor.print();
    }
}


