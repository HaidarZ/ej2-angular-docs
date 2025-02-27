

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, EditorService, SelectionService, EditorHistoryService, SfdtExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      styleUrls: ['styles.css'],
      //specifies the template string for the Document Editor component
      template: `<div>
      <div>
          <ejs-toolbar (clicked)='toolbarButtonClick($event)'>
              <e-items>
                  <e-item prefixIcon="e-de-ctnr-bullets e-icons" tooltipText="Bullets" id="Bullets"></e-item>
                  <e-item prefixIcon="e-de-ctnr-numbering e-icons" tooltipText="Numbering" id="Numbering"></e-item>
                  <e-item text="Clear" id="clearlist" tooltipText="Clear List"></e-item>
              </e-items>
          </ejs-toolbar>
        </div>
    <ejs-documenteditor #document_editor [enableSelection]='true' [isReadOnly]='false' [enableEditor]=true [enableEditorHistory]=true [enableSfdtExport]=true height="330px" style="display:block"></ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      //Provide necessary service.
      providers: [EditorService, SelectionService, EditorHistoryService, SfdtExportService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public toolbarButtonClick(args: any) {
        switch (args.item.id) {
            case 'Bullets':
                //To create bullet list
                this.documentEditor.editor.applyBullet('\uf0b7', 'Symbol');
                break;
            case 'Numbering':
                //To create numbering list
                this.documentEditor.editor.applyNumbering('%1)', 'UpRoman');
                break;
            case 'clearlist':
                //To clear list
                this.documentEditor.editor.clearList();
                break;
        }
    }
}


