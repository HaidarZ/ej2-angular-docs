

import { Component } from '@angular/core';

export interface User {
    selectedDate: Date;
}
export interface JSONUser {
    selectedDate: string;
}
@Component({
    selector: 'app-root',
    template: `
    <!-- To Render DatePicker -->
    <ejs-datepicker id="datepicker" width='245px' [(value)]='user.selectedDate' (change)='onChange($event)'></ejs-datepicker>
    <div class="valuestring">
    <b>User model</b>:  <br/>{{user | json }}
    <br/><br/>
    <b>JSON Data</b>: <br/>{{ model_result }}
    <br/><br/>
    </div>`
})
export class AppComponent {
    public user: User;
    public JSONData: JSONUser = JSON.parse('{ "selectedDate": "2018-12-18T08:56:00+00:00"}');
    public model_result: string = JSON.stringify(this.JSONData);

    public ngOnInit() {
        this.user = this.JSONData;
    }
    onChange(args) {
        this.JSONData.selectedDate = args.value;
        this.model_result = JSON.stringify(this.JSONData);
    }
}



