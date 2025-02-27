---
layout: post
title: Customize font family drop down in Angular Document editor component | Syncfusion
description: Learn here all about Customize font family drop down in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Customize font family drop down 
documentation: ug
domainurl: ##DomainURL##
---

# Customize font family drop down in Angular Document editor component

Document editor provides an options to customize the font family drop down list values using [`fontfamilies`](https://ej2.syncfusion.com/angular/documentation/api/document-editor/documentEditorSettingsModel/#fontfamilies) in Document editor settings. Fonts which are added in fontFamilies of [`documentEditorSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor-container/#documenteditorsettings) will be displayed on font drop down list of text properties pane and font dialog.

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/angular/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to change the font families in Document editor container.

```typescript
import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';
@Component({
      selector: 'app-root',
      // specifies the template string for the DocumentEditorContainer component
      template: `<ejs-documenteditorcontainer serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" height="600px" style="display:block" [documentEditorSettings]= "fontFamilies" [enableToolbar]=true> </ejs-documenteditorcontainer>`,
      providers: [ToolbarService]
})
export class AppComponent implements OnInit {
    // Add required font families to list it in font drop down
    public fontFamilies={fontFamilies :['Algerian', 'Arial', 'Calibri', 'Cambria']};
    ngOnInit(): void {
    }
}
```

Output will be like below:

![Font](../images/font-family.png)