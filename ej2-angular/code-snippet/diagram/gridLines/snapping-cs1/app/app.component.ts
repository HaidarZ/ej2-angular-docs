

import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, SnapSettingsModel, SnapConstraints, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram #diagram id="diagram" width="100%" height="580px" [snapSettings]='snapSettings' [getNodeDefaults]='getNodeDefaults'>
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150></e-node>
        </e-nodes>
    </ejs-diagram>`
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram: DiagramComponent;
    public snapSettings: SnapSettingsModel = {
        // Enables the object to snap with both horizontal and Vertical gridlines
        constraints: SnapConstraints.SnapToLines | SnapConstraints.ShowLines
    };
    public getNodeDefaults(node: NodeModel): NodeModel {
        node.height = 100;
        node.width = 100;
        node.style.fill = "#6BA5D7";
        node.style.strokeColor = "White";
        return node;
    }
}


