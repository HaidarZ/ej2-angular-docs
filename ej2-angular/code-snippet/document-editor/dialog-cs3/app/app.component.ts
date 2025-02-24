

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import {
    DocumentEditorComponent, SfdtExportService, SelectionService, TableDialogService, EditorService
} from '@syncfusion/ej2-angular-documenteditor';

@Component({
    selector: 'app-container',
    template: `<div>
    <button ejs-button (click)="btnClick()" >Show Dialog</button>
    <ejs-documenteditor #document_editor  id="container" height="330px" style="display:block" [isReadOnly]=false [enableSfdtExport]=true
    [enableTableDialog]=true [enableEditor]=true>
    </ejs-documenteditor>
    </div>`,
    encapsulation: ViewEncapsulation.None,
    providers: [SfdtExportService, SelectionService, TableDialogService, EditorService]
})

export class AppComponent {
    @ViewChild('document_editor')
    public documentEditor: DocumentEditorComponent;

    public btnClick(): void {
        //Open table dialog.
        this.documentEditor.showDialog('Table');
    }
}


