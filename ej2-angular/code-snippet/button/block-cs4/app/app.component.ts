

import { Component, ViewChild, OnInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls:['styles.css'],
    template:  `<button #btn ejs-button [isPrimary]="true">Button</button>`
})

export class AppComponent implements OnInit {
  @ViewChild('btn')
  private btn: ButtonComponent;
  ngOnInit() {
    this.btn.element.setAttribute("title", "Primary Button")
  }
}


