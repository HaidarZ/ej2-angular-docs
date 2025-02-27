

import { Component, ViewChild } from '@angular/core';
import { ProgressButtonComponent } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<button #progressBtn ejs-progressbutton [content]='content' [enableProgress]='true' [duration]='4000' (end)='end()' [iconCss]='iconCss' cssClass='e-hide-spinner' (click)="btnClick()"></button>`
})

export class AppComponent {
    @ViewChild('progressBtn')
    private progressBtn : ProgressButtonComponent;
    private content: string = 'Download';
    private iconCss: string = 'e-btn-sb-icon e-download';

    private end(): void {
        this.content = 'Download';
        this.iconCss = 'e-btn-sb-icon e-download';
    }

    private btnClick(): void {
        if(this.content === 'Download') {
            this.content = 'Pause';
            this.iconCss = 'e-btn-sb-icon e-pause';
        }
        else if(this.content === 'Pause') {
            this.content = 'Resume';
            this.iconCss = 'e-btn-sb-icon e-play';
            this.progressBtn.stop();
        }
        else if(this.content === 'Resume') {
            this.content = 'Pause';
            this.iconCss = 'e-btn-sb-icon e-pause';
            this.progressBtn.start();
        }
    }
}


