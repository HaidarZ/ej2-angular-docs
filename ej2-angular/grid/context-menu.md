---
title: "Context Menu"
component: "Grid"
description: "Learn how to use the context menu and add custom context menu items in the Essential JS 2 DataGrid control."
---

# Context menu

The Grid has options to show the context menu when right clicked on it. To enable this feature,
you need to define either default or custom item in the
[`contextMenuItems`](../api/grid/#contextmenuitems).

To use the context menu, inject the **ContextMenuService** in the provider section of **AppModule**.

The default items are in the following table.

Items| Description
----|----
`AutoFit`|  Auto fit the current column.
`AutoFitAll` | Auto fit all columns.
`Edit`|  Edit the current record.
`Delete` | Delete the current record.
`Save` | Save the edited record.
`Cancel` | Cancel the edited state.
`Copy` | Copy the selected records.
`PdfExport` | Export the grid data as Pdf document.
`ExcelExport` | Export the grid data as Excel document.
`CsvExport` | Export the grid data as CSV document.
`Group` | Group the current column.
`Ungroup` | Ungroup the current column.
`SortAscending` | Sort the current column in ascending order.
`SortDescending` | Sort the current column in descending order.
`FirstPage` | Go to the first page.
`PrevPage` | Go to the previous page.
`LastPage` | Go to the last page.
`NextPage` | Go to the next page.

{% tab template="grid/default", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import {
    GridComponent, ContextMenuService, PageService, ResizeService, SortService, GroupService, EditService,
    EditSettingsModel, ContextMenuItem, PdfExportService, ExcelExportService
} from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' id="gridcomp" allowPaging='true' [allowExcelExport]='true'
     [allowPdfExport]='true' height='220px' [allowSorting]='true'
        [contextMenuItems]="contextMenuItems" [editSettings]='editing' [allowGrouping]='true'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey='true'></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
                `,
    providers: [ContextMenuService, PageService, ResizeService, SortService, GroupService, EditService,
        PdfExportService, ExcelExportService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public contextMenuItems: ContextMenuItem[] = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
        'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
        'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
        'LastPage', 'NextPage', 'Group', 'Ungroup'];
    @ViewChild('grid')
    public grid: GridComponent;
    public editing: EditSettingsModel = { allowEditing: true, allowDeleting: true };

    ngOnInit(): void {
        this.data = data;
    }
}

```

{% endtab %}

## Custom context menu items

The custom context menu items can be added by defining the
[`contextMenuItems`](../api/grid/#contextmenuitems) as a collection of
[`contextMenuItemModel`](../api/grid/contextMenuItemModel).
Actions for this customized items can be defined in the
[`contextMenuClick`](../api/grid/#contextmenuclick) event.

{% tab template="grid/default", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, ContextMenuService, PageService, ContextMenuItemModel } from '@syncfusion/ej2-angular-grids';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
    selector: 'app-root',
    template: `<ejs-grid #grid id='gridcomp' [dataSource]='data' [allowSelection]='true' [allowPaging]='true'
    height='265px' [contextMenuItems]='contextMenuItems'
                (contextMenuClick)='contextMenuClick($event)'>
                    <e-columns>
                        <e-column field='EmployeeID' [isPrimaryKey]='true' headerText='Employee ID' textAlign='Right' width=120></e-column>
                        <e-column field='FirstName' headerText='FirstName' width=150></e-column>
                        <e-column field='LastName' headerText='Last Name' width=150></e-column>
                        <e-column field='City' headerText='City' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                `,
    providers: [ContextMenuService, PageService]
})
export class AppComponent implements OnInit {

    public data: object[];
    public contextMenuItems: ContextMenuItemModel[] = [{ text: 'Copy with headers', target: '.e-content', id: 'copywithheader' }];
    @ViewChild('grid') public grid: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
    }

    contextMenuClick(args: MenuEventArgs): void {
        if (args.item.id === 'copywithheader') {
            this.grid.copy(true);
        }
    }
}

```

{% endtab %}

## Show context menu on left click

By default, the context menu items will be shown in the Grid using the right mouse click action. Show the context menu items during the left mouse click action using the [created](../api/grid/#created) and context menu's `beforeOpen` events of the Grid.

Using the `onclick` eventlistener of Grid , you can get the clicked position values and send them to the `open` method of the context menu in the `onclick` event of the Grid. Also, we have prevented the default right click action to open the context menu items using the [created](../api/grid/#created) event of the Grid.

This is demonstrated in the following sample.

{% tab template="grid/default", sourceFiles="app/app.component.ts,app/app.module.ts,app/main.ts" %}

```typescript
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

```

{% endtab %}

> You can hide or show an item in context menu for specific area inside of grid by defining the
[`target`](../api/grid/contextMenuItemModel/#target) property.
