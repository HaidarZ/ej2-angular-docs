

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SfdtExportService, SelectionService, HyperlinkDialogService, EditorService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      //specifies the template string for the Document Editor component
      template: `<div>
      <button ejs-button (click)="btnClick()" >Show Dialog</button>
      <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
      [enableHyperlinkDialog]=true [enableEditor]=true>
      </ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [SfdtExportService, SelectionService, HyperlinkDialogService, EditorService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public btnClick(): void {
        //Open hyperlink dialog.
        this.documentEditor.showDialog('Hyperlink');
    }
}


