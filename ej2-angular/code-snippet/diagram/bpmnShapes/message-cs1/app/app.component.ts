

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { DiagramComponent, Diagram, NodeModel, BpmnFlowModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
    selector: "app-container",
    template: `<ejs-diagram id="diagram" width="100%" height="580px" [constraints]='diagramConstraints'>
        <e-connectors>
            <e-connector id='connector' type='Orthogonal' [sourcePoint]='sourcePoint' [targetPoint]='targetPoint' [constraints]='connectorConstraints' [shape]='shape'>
            </e-connector>
        </e-connectors>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagramConstraints: DiagramConstraints;
    public connectorConstraints: ConnectorConstraints;
    public sourcePoint: PointModel;
    public targetPoint:PointModel;
    public shape: BpmnFlowModel;
    ngOnInit(): void {
        this.sourcePoint = { x: 100, y: 100 };
        this.targetPoint = { x: 200, y: 200 };
        this.shape = {
            type: 'Bpmn',
            flow: 'Message',
            message: 'InitiatingMessage'
        };
    }
}


