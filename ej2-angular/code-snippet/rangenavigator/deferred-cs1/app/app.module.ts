import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService, StepLineSeriesService, RangeTooltipService} from '@syncfusion/ej2-angular-charts';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ChartModule, RangeNavigatorModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ AreaSeriesService, DateTimeService, StepLineSeriesService, RangeTooltipService ]
})
export class AppModule { }