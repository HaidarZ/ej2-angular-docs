

import { Component, ViewEncapsulation } from '@angular/core';
import { world_map } from 'world-map.ts';

@Component({
  selector: 'app-container',
  // specifies the template string for the maps component
  template:
    `<ejs-maps id='rn-container' height='200px' width='200px'>
     <e-layers>
         <e-layer [shapeData]='shapeData' [shapeSettings]="shapeSettings"></e-layer>
    </e-layers>
    </ejs-maps>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public shapeData = world_map;
    public shapeSettings = {
        autofill: true
    }
}


