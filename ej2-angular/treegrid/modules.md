---
layout: post
title: Modules in Angular Treegrid component | Syncfusion
description: Learn here all about Modules in Syncfusion Angular Treegrid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Modules 
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Angular Treegrid component

The following value providers should be injected to extend TreeGrid's functionality.

| Module | Description |
|------|-------------|
| [`PageService`](../../treegrid/paging)| Inject this module to use paging feature.|
| [`SortService`](../../treegrid/sorting)| Inject this module to use sorting feature.|
| [`FilterService`](../../treegrid/filtering)| Inject this module to use filtering feature.|
| [`EditService`](../../treegrid/edit)| Inject this module to use editing feature.|
| [`AggregateService`](../../treegrid/aggregates)| Inject this module to use aggregate feature.|
| [`ColumnMenuService`](../../treegrid/columns/#column-menu)| Inject this module to use column menu feature.|
| [`CommandColumnService`](../../treegrid/edit/#command-column)| Inject this module to use command column feature.|
| [`ContextMenuService`](../../treegrid/context-menu)| Inject this module to use context menu feature.
| [`ResizeService`](../../treegrid/columns/#column-resizing)| Inject this module to use resize feature.|
| [`ReorderService`](../../treegrid/columns/#reorder)| Inject this module to use reorder feature.|
| [`PrintService`](../../treegrid/print)| Inject this module to use to use print feature and this is a default injected module.|
| [`ToolbarService`](../../treegrid/tool-bar)| Inject this module to use toolbar feature.|
| [`ExcelExportService`](../../treegrid/excel-export)| Inject this module to use Excel export feature.|
| [`PdfExportService`](../../treegrid/pdf-export)| Inject this module to use PDF export feature.|
| [`RowDDService`](../../treegrid/row/indent)| Inject this module to use Indent feature.|

These modules should be injected into the `providers` section of root `NgModule` or component class.

> You can get the data module by using the [`getDataModule`](../../api/treegrid/#getdatamodule) method in tree grid.
> You can refer to our [`Angular Tree Grid`](https://www.syncfusion.com/angular-ui-components/angular-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`Angular Tree Grid example`](https://ej2.syncfusion.com/angular/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.