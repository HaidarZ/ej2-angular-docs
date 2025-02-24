---
layout: post
title: Deploy document editor component for mobile in Angular Document editor component | Syncfusion
description: Learn here all about Deploy document editor component for mobile in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Deploy document editor component for mobile 
documentation: ug
domainurl: ##DomainURL##
---

# Deploy document editor component for mobile in Angular Document editor component

## Document editor component for Mobile

At present, Document editor component is not responsive for mobile, and we haven't ensured the editing functionalities in mobile browsers. Whereas it works properly as a document viewer in mobile browsers.

Hence, it is recommended to switch the Document editor component as read-only in mobile browsers. Also, invoke [`fitPage`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#fitpage) method with [`FitPageWidth`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/pageFitType/) parameter in document change event, such as to display one full page by adjusting the zoom factor.

The following example code illustrates how to deploy Document Editor component for Mobile.

```typescript
//Initialize Document Editor Container component.
import { Component } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-container',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer #document_editor (documentChange)="onDocumentChange()" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent {

    @ViewChild('document_editor')
    public container: DocumentEditorContainerComponent;

    onDocumentChange(): void {

    //To detect the device
    let isMobileDevice: boolean = /Android|Windows Phone|webOS/i.test(navigator.userAgent);

    if (isMobileDevice) {
      this.container.restrictEditing = true;
      setTimeout(() => {
        this.container.documentEditor.fitPage("FitPageWidth");
      }, 50);
    }
    else {
      this.container.restrictEditing = false;
    }
  }
}
```

You can download the complete working example from this [GitHub location](https://github.com/SyncfusionExamples/Deploy-Document-Editor-in-Mobile-Friendly-Web-page/)

>Note: You can use the [`restrictEditing`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container#restrictediting) in DocumentEditorContainer and [`isReadOnly`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/#isreadonly) in DocumentEditor based on your requirement to change component to read only mode.