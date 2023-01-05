import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule, ReorderService  } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ReorderService]
})
export class AppModule { }