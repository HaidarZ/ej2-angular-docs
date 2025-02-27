

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { UploaderComponent } from '@syncfusion/ej2-angular-inputs';
@Component({
    selector: 'app-root',
    templateUrl: 'default.html',
    styleUrls: ['index.css']
})

export class AppComponent {
    @ViewChild('defaultupload')
    public uploadObj: UploaderComponent;
    public autoUpload: boolean = false;
    public path: Object = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    };
    ngAfterViewInit(): void {
        document.getElementById('first').onclick = (args) => {
            this.uploadObj.upload(this.uploadObj.getFilesData()[0]);
        };
        document.getElementById('full').onclick = (args) => {
            this.uploadObj.upload(this.uploadObj.getFilesData());
        };
    }
}


