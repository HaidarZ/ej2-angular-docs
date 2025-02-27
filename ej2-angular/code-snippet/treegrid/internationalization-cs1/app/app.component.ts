

import { L10n } from '@syncfusion/ej2-base';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-treegrid';


    L10n.load({
        'de-DE': {
            'treegrid': {
                'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
                'Expand All': 'Alle erweitern',
                'Collapse All': 'Alles einklappen',
                "Print": "Drucken",
                "Pdfexport": "PDF-Export",
                "Excelexport": "Excel-Export",
                "Wordexport": "Word-Export",
                "FilterButton": "Filter",
                "ClearButton": "klar",
                "StartsWith": "Beginnt mit",
                "EndsWith": "Endet mit",
                "Contains": "Enthält",
                "Equal": "Gleich",
                "NotEqual": "Nicht gleich",
                "LessThan": "Weniger als",
                "LessThanOrEqual": "Weniger als oder gleich",
                "GreaterThan": "Größer als",
                "GreaterThanOrEqual": "Größer als oder gleich",
                "EnterValue": "Geben Sie den Wert ein",
                "FilterMenu": "Filter"
            },
            'pager': {
                'currentPageInfo': '{0} von {1} Seiten',
                'totalItemsInfo': '({0} Beiträge)',
                'firstPageTooltip': 'Zur ersten Seite',
                'lastPageTooltip': 'Zur letzten Seite',
                'nextPageTooltip': 'Zur nächsten Seite',
                'previousPageTooltip': 'Zurück zur letzten Seit',
                'nextPagerTooltip': 'Zum nächsten Pager',
                'previousPagerTooltip': 'Zum vorherigen Pager'
            },
            "dropdowns": {
                "noRecordsTemplate": "Keine Aufzeichnungen gefunden"
            },
            "datepicker": {
                "placeholder": "Wählen Sie ein Datum",
                "today": "heute"
            }
        }
    });

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' locale='de-DE' #treegrid height='220' [allowPaging]='true' [allowExcelExport]='true' [pageSettings]='pager' [treeColumnIndex]='1' [allowFiltering]='true' [filterSettings]='filters'  childMapping='subtasks' [toolbar]='toolbarOptions'>
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
        </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data: Object[];
    public pager: Object;
    public toolbarOptions: ToolbarItems[];
    public filters: Object;
    ngOnInit(): void {
        this.data = sampleData;
        this.pager = {pageSize: 7};
        this.toolbarOptions = ['Print'];
        this.filters = { type: 'Menu' };
    }
}



