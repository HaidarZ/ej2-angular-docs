

import { Component, ViewChild } from '@angular/core';
import { ImageExportService, LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" [allowImageExport]=true #gauge>
    </ejs-lineargauge><div><button  id='export' (click)='export()'>Export</button></div>`,
    providers: [ImageExportService]
})
export class AppComponent {
    @ViewChild('gauge')
    public gaugeObj: LinearGaugeComponent;
    public export() {
      this.gaugeObj.export('PNG', 'Gauge');
    };
}


