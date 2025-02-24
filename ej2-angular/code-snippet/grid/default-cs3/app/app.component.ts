

import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, PageService, EditService, ContextMenuService, } from '@syncfusion/ej2-angular-grids';
import { ContextMenuItem, EditSettingsModel, } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' #Grid id="Grid" allowPaging='true'
        [contextMenuItems]="contextMenuItems" [editSettings]='editOptions' (created)="created($event)">
        <e-columns>
            <e-column field='EmployeeID' headerText='Employee ID' isPrimaryKey='true'></e-column>
            <e-column field='FirstName' headerText='First Name'></e-column>
            <e-column field='LastName' headerText='Last Name' ></e-column>
            <e-column field='City' headerText='City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [[PageService, EditService, ContextMenuService]
})
export class AppComponent implements OnInit {

    public values;
    public data: Object[];
    public contextMenuItems: ContextMenuItem[];
    public editing: EditSettingsModel;
    @ViewChild('Grid') public grid: GridComponent;
    ngOnInit(): void {
        this.data = employeeData;
        this.contextMenuItems = ['Copy', 'Edit', 'Delete','Save', 'Cancel'];
        this.editOptions = {
            allowDeleting: true,
            allowEditing: true,
            allowAdding: true,
        };
    }
    ngAfterViewInit(args: any): void {
        document.getElementById('Grid').onclick = (event) => {
            this.values = event;
            this.grid.contextMenuModule.contextMenu.open(
                this.values.pageY + pageYOffset,
                this.values.pageX + pageXOffset
            );
        };
    }
    created(): void {
        this.grid.contextMenuModule.contextMenu.beforeOpen = (args) => {
            if (args.event && args.event.which === 3)
            args.cancel = true;
            args.event = this.values;
            this.grid.contextMenuModule.contextMenuBeforeOpen(args);
        };
    }
}



