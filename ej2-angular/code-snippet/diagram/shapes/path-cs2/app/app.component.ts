

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Diagram, NodeModel, FlowShapeModel , TextStyleModel } from '@syncfusion/ej2-diagrams';
import { DiagramComponent } from '@syncfusion/ej2-angular-diagrams';


@Component({
    selector: "app-container",
    template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [getNodeDefaults] ='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [shape]='shape'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild('diagram')
    public diagram: DiagramComponent;

    public shape: FlowShapeModel = {
        type: 'Flow',
        shape: 'Document'
    };
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill =  'none';
        return node;
    }
}


