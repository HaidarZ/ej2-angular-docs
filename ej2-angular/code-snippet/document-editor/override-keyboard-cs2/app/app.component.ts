

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SelectionService, EditorService, DocumentEditorKeyDownEventArgs, SfdtExportService, WordExportService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
      selector: 'app-container',
      template: `<div>
      <ejs-documenteditor #document_editor height="330px" style="width: 100%;display:block" [isReadOnly]=false [enableSelection]=true [enableSfdtExport]=true [enableEditor]=true (keyDown)="onKeyDown($event)">
      </ejs-documenteditor>
      </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [SelectionService, EditorService, SfdtExportService, WordExportService]
})
export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public onKeyDown(args: DocumentEditorKeyDownEventArgs): void {
          let keyCode: number = args.event.which || args.event.keyCode;

          let isCtrlKey: boolean = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);

          let isAltKey: boolean = args.event.altKey ? args.event.altKey : ((keyCode === 18) ? true : false);

          // 83 is the character code for 'S'
          if (isCtrlKey && !isAltKey && keyCode === 83) {
              //To prevent default save operation, set the isHandled property to true
              args.isHandled = true;
              //Download the document in docx format.
              this.documentEditor.save('sample', 'Docx');
              args.event.preventDefault();
          } else if (isCtrlKey && isAltKey && keyCode === 83) {
              //Download the document in sfdt format.
              this.documentEditor.save('sample', 'Sfdt');
          }
    }
}


