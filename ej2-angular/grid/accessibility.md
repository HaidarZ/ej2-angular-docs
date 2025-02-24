---
layout: post
title: Accessibility in Angular Grid component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Grid component

Accessibility is achieved in the Grid component through WAI-ARIA Standard and Keyboard Navigations.
User can effectively access the Grid features through assistive technologies such as screen readers.

## WAI-ARIA

WAI-ARIA (Accessibility Initiative – Accessible Rich Internet Applications) defines a way to increase the accessibility of web pages, dynamic content, and user interface components developed with Ajax, HTML, JavaScript, and related technologies.
ARIA provides additional semantics to describe the role, state, and functionality of web components.

The following list of ARIA attributes is used in Grid.
* grid (role)
* row (role)
* gridcell (role)
* aria-selected (attribute)
* aria-expanded (attribute)
* aria-sort (attribute)
* aria-busy (attribute)
* aria-invalid (attribute)
* aria-grabbed (attribute)
* aria-owns (attribute)
* aria-label (attribute)

> You can achieve a single table announcing on the JAWS screen reader by setting an **`e-gridcell-read`** class through [`cssClass`](https://ej2.syncfusion.com/angular/documentation/api/grid/#cssclass) property of the grid.

## Keyboard Navigation

Grid functionalities can be interactive with keyboard shortcuts. In order to utilize all the available keyboard shortcuts, the [`enableHeaderFocus`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enableheaderfocus) property of the Grid needs to be set as **true**.

The following keyboard shortcuts are supported by the Grid.

Interaction Keys | Description
-----|-----
<b>Pager</b>||
<kbd>Tab / Shift + Tab</kbd> | Focus on the next/previous pager item.
<kbd>Enter / Space</kbd> | Select the currently focused page.
<kbd>Right Arrow / PageDown</kbd> | Navigate to next page.
<kbd>Left Arrow / PageUp</kbd> | Navigate to previous page.
<kbd>Home / End</kbd> | Navigate to first and last page.
<b>Focus Elements</b>||
<kbd>Home</kbd> | Goes to the first cell.
<kbd>End</kbd> | Goes to the last cell.
<kbd>Ctrl + Home</kbd> | Goes to the first row.
<kbd>Ctrl + End</kbd> | Goes to the last row.
<kbd>DownArrow</kbd> | Moves the cell focus downward.
<kbd>UpArrow</kbd> | Moves the cell focus upward.
<kbd>LeftArrow</kbd> | Moves the cell focus left side.
<kbd>RightArrow</kbd> | Moves the cell focus right side.
<kbd>Alt + J</kbd> | To focus grid header element.
<kbd>Alt + W</kbd> | To focus grid content element.
<b>Selection</b>||
<kbd>Shift + DownArrow</kbd> | Extends the row/cell selection downwards.
<kbd>Shift + UpArrow</kbd> | Extends the row/cell selection upwards.
<kbd>Shift + LeftArrow</kbd> | Extends the cell selection to the left side.
<kbd>Shift + RightArrow</kbd> | Extends the cell selection to the right side.
<kbd>Enter</kbd> | Moves the row/cell selection downward.
<kbd>Shift + Enter</kbd> | Moves the row/cell selection upward.
<kbd>Tab</kbd> | Moves the cell selection right side.
<kbd>Shift + Tab</kbd> | Moves the cell selection left side.
<kbd>Esc</kbd> | Deselects all the rows/cells.
<kbd>Ctrl + A</kbd> | Selects all the rows/cells.
<kbd>UpArrow</kbd> | Moves up a row/cell selection.
<kbd>DownArrow</kbd> | Moves down a row/cell selection.
<kbd>RightArrow</kbd> | Moves to the right cell selection.
<kbd>LeftArrow</kbd> | Moves to the left cell selection.
<b>Grouping</b>||
<kbd>Ctrl + DownArrow</kbd> | Expands all the visible groups.
<kbd>Ctrl + UpArrow</kbd> | Collapses all the visible groups.
<kbd>Ctrl + Space</kbd> | Performs grouping when focused on a header element.
<kbd>Enter</kbd> | If the current cell is an expand/collapse cell then expands/collapses the current group/detailrow/childgrid.
<b>Print</b>||
<kbd>Ctrl + P</kbd> | Prints the Grid.
<b>Clipboard</b>||
<kbd>Ctrl + C</kbd> | Copy selected rows or cells data into clipboard
<kbd>Ctrl + Shift + H</kbd> | Copy selected rows or cells data with header into clipboard
<b>Edit</b>||
<kbd>F2</kbd> | Edits current selected row/cell in Grid.
<kbd>Enter</kbd> | If current row/cell is in edit state, then completes the editing.
<b>Filtering</b>||
<kbd>Alt + Down arrow</kbd> | Opens the filter menu(excel, menu and checkbox filter) when its header element is in focused state.
<b>Column Menu</b>||
<kbd>Alt + Down arrow</kbd> | Opens column menu when its header element is in focused state.
<b>Reordering</b>||
<kbd>Ctrl + left arrow or right arrow</kbd> | Reorders the focused header column to the left or right side.
<b>Sorting</b>||
<kbd>Ctrl + Enter</kbd> | Performs multi-sorting on a column when its header element is in focused state.
<kbd>Shift + Enter</kbd> | Clears sorting for the focused header column.
<kbd>Enter</kbd> | Performs sorting(ascending/descending) on a column when its header element is in focused state.