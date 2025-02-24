


import { Component } from '@angular/core';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-container',
  template: `<div id="container"></div>`
})
export class AppComponent {
  constructor() {}

  ngAfterViewInit() {
    //createSpinner() method is used to create spinner
    createSpinner({
      // Specify the target for the spinner to show
      target: document.getElementById('container')
    });

    // showSpinner() will make the spinner visible
    showSpinner(document.getElementById('container'));

    setInterval(function(){
      // hideSpinner() method used hide spinner
      hideSpinner(document.getElementById('container'));
    }, 100000);
  }
}



