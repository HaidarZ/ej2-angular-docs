

import { Component, OnInit, Inject } from '@angular/core';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app/template.html'
})
export class AppComponent implements OnInit {
    skillForm: FormGroup;
    build: FormBuilder;
    constructor(@Inject(FormBuilder) private builder: FormBuilder) {
        this.build = builder;
        this.createForm();
    }
    createForm() {
        this.skillForm = this.build.group({
            daterangepicker: ['', Validators.required],
            username: ['', Validators.required],
            usermail: ['', Validators.email],
        });
    }
    get username() {
        return this.skillForm.get('username');
    }
    get daterangepicker() {
        return this.skillForm.get('daterangepicker');
    }
    get usermail() {
        return this.skillForm.get('usermail');
    }

    onSubmit() {
        alert("Form Submitted!");
    }
}



