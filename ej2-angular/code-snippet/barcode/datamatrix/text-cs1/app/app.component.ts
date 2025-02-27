

import { Component } from "@angular/core";
import { Component ,ViewChild ,ViewEncapsulation} from "@angular/core";

@Component({
  selector: "app-container",
  // specifies the template string for the barcode generator component
  template: `<ejs-datamatrixgenerator style="display: block;"  #barcode id="barcode" width="200px"  height="200px" [displayText] = 'displayText' mode="SVG" type="DataMatrix" value="Syncfusion"></ejs-datamatrixgenerator>`
})
export class AppComponent {
   @ViewChild('barcode')
   @ViewChild('displayText')
   public displayText: DisplayTextModel;
   ngOnInit(): void {  

     this.displayText = {
       text:'text'
     }
   }
}


