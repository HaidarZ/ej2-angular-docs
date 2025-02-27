


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    styleUrls: ['index.css'],
    template: `<label class="label">Add maxlength attribute through inline</label>
                <div class="multiline">
                <ejs-textbox [multiline]='true' maxlength='15' floatLabelType='Auto' placeholder='Enter your address' ></ejs-textbox>
               </div>
               <label class="label">Add maxlength attribute through addAttributes method</label>
                <div class="multiline">
                <ejs-textbox #default [multiline]='true' floatLabelType='Auto' placeholder='Enter your address' ></ejs-textbox>
               </div>
               <button ejs-button id=length (click)='clickHandler($event)'>Add max length</button>
               `
})
export class AppComponent {
    @ViewChild('default')
    public textareaObj: TextBoxComponent;

    public clickHandler() {
        this.textareaObj.addAttributes({maxlength: 15});
 }
}



