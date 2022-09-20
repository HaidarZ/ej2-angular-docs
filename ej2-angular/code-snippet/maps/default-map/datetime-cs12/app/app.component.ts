

import { Component, OnInit } from '@angular/core';
import { Maps, Bubble, MapsTooltip } from '@syncfusion/ej2-angular-maps';
import { world_map } from 'world-map.ts';
Maps.Inject(Bubble, MapsTooltip);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapeDataPath]='shapeDataPath' [shapePropertyPath]='shapePropertyPath'      [bubbleSettings] = 'bubbleSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData: object;
    public shapeDataPath: object;
    public shapePropertyPath: object;
    public bubbleSettings: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeDataPath = 'name';
        this.shapePropertyPath = 'name';
        this.bubbleSettings = [{
            visible: true,
            minRadius: 5,
            dataSource: [
                { name: 'India', population: '38332521' },
                { name: 'New Zealand', population: '19651127' },
                { name: 'Pakistan', population: '3090416' }
            ],
            maxRadius: 80,
            valuePath: 'population',
            tooltipSettings: {
                visible: true,
                valuePath: 'population'
            }
        }]
   }
}



