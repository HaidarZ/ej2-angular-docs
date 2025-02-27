


import { Component, OnInit } from '@angular/core';
import { Maps, Legend } from '@syncfusion/ej2-angular-maps';
import { world_map } from 'world-map.ts';

Maps.Inject(Legend);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [legendSettings] = 'legendSettings'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource' [shapeSettings] = 'shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public dataSource: object[];
    public shapeData: object;
    public shapePropertyPath: string;
    public shapeDataPath: string;
    public shapeSettings: object;
    public legendSettings: object;
    ngOnInit(): void {
        this.dataSource = [
            { "Country": "China", "Membership": "Permanent" },
            { "Country": "France", "Membership": "Permanent" },
            { "Country": "Russia", "Membership": "Permanent" },
            { "Country": "Kazakhstan","Membership": "Non-Permanent" },
            { "Country": "Poland", "Membership": "Non-Permanent" },
            { "Country": "Sweden", "Membership": "Non-Permanent" }];
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'Country';
        this.shapeSettings = {
            colorValuePath: 'Membership',
            colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
        };
        this.legendSettings = {
            visible: true,
            background: 'green',
            border: {
                color: 'blue',
                width: 2
            },
            fill: 'orange',
            labelPosition: 'Before',
            orientation: 'Vertical',
            textStyle: {
                size: '12px',
                color: 'red',
                fontStyle: 'italic'
            },
            title: {
                description: 'Legend title',
                text: 'Legend'
            },
            titleStyle: {
                size: '12px',
                color: '#d6e341',
                fontStyle: 'italic'
            }
        }
    }
}



