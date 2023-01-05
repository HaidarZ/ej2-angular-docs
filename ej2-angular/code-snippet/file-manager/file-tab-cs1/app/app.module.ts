import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule   } from '@syncfusion/ej2-angular-buttons';
import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';

import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [FileManagerModule , HttpModule, JsonpModule, BrowserModule,TabAllModule , ButtonModule, CheckBoxModule ],
declarations: [AppComponent],
providers:[ NavigationPaneService, ToolbarService, DetailsViewService],
bootstrap: [AppComponent]
})
export class AppModule { }