import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
    ],
    declarations: [AppComponent,NumericTextBoxComponent],
    bootstrap: [AppComponent],
    providers: [PageService,
                SortService,
                FilterService]
})
export class AppModule { }