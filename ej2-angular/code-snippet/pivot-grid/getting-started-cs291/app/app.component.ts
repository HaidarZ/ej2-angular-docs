

import { Component, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, FieldListService } from '@syncfusion/ej2-angular-pivotview';
import { Pivot_Data } from './datasource.ts';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
  selector: 'app-container',
  providers: [FieldListService],
  // specifies the template string for the pivot table component
  template: `<div style="height: 480px;"><ejs-pivotview #pivotview id='PivotView' height='350' [dataSourceSettings]=dataSourceSettings [width]=width showFieldList='true' (dataBound)='ondataBound($event)'></ejs-pivotview></div><a id="save" class="btn btn-primary">Save</a><div class="fileUpload btn btn-primary"><span>Load</span><input id="files" type="file" class="upload" /></div>`,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
    public dataSourceSettings: IDataOptions;
    public button: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    ondataBound(args: any) {
       var dataSource = JSON.parse(this.pivotGridObj.getPersistData()).dataSourceSettings.dataSource;
        var a = document.getElementById('save');
        var mime_type = 'application/octet-stream'; // text/html, image/png, et c
        a.setAttribute('download', 'pivot.JSON');
        a.href = 'data:'+ mime_type +';base64,'+ btoa(JSON.stringify(dataSource) || '');
        document.getElementById('files').addEventListener('change', this.readBlob, false);
    }

    readBlob(args: any) {
        var files = document.getElementById('load').files;
        var file = files[0];
        var start = 0;
        var stop = file.size - 1;
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) {
                this.pivotGridObj.dataSource = JSON.parse(evt.target.result);
            }
        };
        var blob = file.slice(start, stop + 1);
        reader.readAsBinaryString(blob);
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            enableSorting: true,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.width = "100%";
    }
 }


