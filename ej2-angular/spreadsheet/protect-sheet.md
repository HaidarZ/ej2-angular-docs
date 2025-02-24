---
layout: post
title: Protect sheet in Angular Spreadsheet component | Syncfusion
description: Learn here all about Protect sheet in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Protect sheet 
documentation: ug
domainurl: ##DomainURL##
---

# Protect sheet in Angular Spreadsheet component

Sheet protection helps you to prevent the users from modifying the data in the spreadsheet.

## Protect Sheet

Protect sheet feature helps you to prevent the unknown users from accidentally changing, editing, moving, or deleting data in a spreadsheet. And you can also protect the sheet with password.
You can use the [`isProtected`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#isProtected) property to enable or disable the Protecting functionality.

> * The default value for `isProtected` property is `false`.

By default in protected sheet, selecting, formatting, inserting, deleting functionalities are disabled. To enable some of the above said functionalities the `protectSettings` options are used in a protected spreadsheet.

The available `protectSettings` options in spreadsheet are,

| Options | Uses |
|-----|------|
| `Select Cells` | Used to perform Cell Selection. |
| `Format Cells` | Used to perform Cell formatting. |
| `Format Rows` | Used to perform Row formatting. |
| `Format Columns` | Used to perform Column formatting. |
| `Insert Link` | Used to perform Hyperlink Insertions. |

> * The default value for all `protectSettings` options are `false`.

By default, the `Protect Sheet` module is injected internally into the Spreadsheet to perform sheet protection function.

**User Interface**:

In the active Spreadsheet, the sheet protection can be done by any of the following ways:

* Select the Protect Sheet item in the Ribbon toolbar under the Data Tab, and then select your desired options.
* Right-click the sheet tab, select the Protect Sheet item in the context menu, and then select your desired options.
* Use the [`protectSheet()`](../api/spreadsheet/#protectSheet) method programmatically.

The following example shows `Protect Sheet` functionality with password in the Spreadsheet control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/protect-sheet-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/spreadsheet/protect-sheet-cs1" %}

### Limitations of Protect sheet

* Password encryption is not supported

## Unprotect Sheet

Unprotect sheet is used to enable all the functionalities that are already disabled in a protected spreadsheet.

**User Interface**:

In the active Spreadsheet, the sheet Unprotection can be done by any of the following ways:

* Select the `Unprotect Sheet` item in the Ribbon toolbar under the Data Tab.
* Right-click the sheet tab, select the `Unprotect Sheet` item in the context menu.
* Use the [`unprotectSheet()`](../api/spreadsheet/#unprotectSheet) method programmatically.

## Unlock the particular cells in the protected sheet

In protected spreadsheet, to make some particular cell or range of cells are editable, you can use [`lockCells()`](../api/spreadsheet/#lockCells) method, with the parameter `range` and `isLocked` property as false.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/lock-cells-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/spreadsheet/lock-cells-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/lock-cells-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/spreadsheet/lock-cells-cs1" %}

## Protect Workbook

Protect workbook feature helps you to protect the workbook so that users cannot insert, delete, rename, hide the sheets in the spreadsheet.
You can use the [`password`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#password) property to protect workbook with password.
You can use the [`isProtected`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#isProtected) property to protect or unprotect the workbook without the password.

> The default value for `isProtected` property is `false`.

**User Interface**:

In the active Spreadsheet, you can protect the worksheet by selecting the Data tab in the Ribbon toolbar and choosing the `Protect Workbook` item. Then, enter the password and confirm it and click on OK.

The following example shows `Protect Workbook` by using the [`isProtected`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#isProtected) property in the Spreadsheet control.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/local-data-binding-cs4/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/spreadsheet/local-data-binding-cs4/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/local-data-binding-cs4/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/spreadsheet/local-data-binding-cs4" %}

The following example shows `Protect Workbook` by using the [`password`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/#password) property in the Spreadsheet control. To unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as syncfusion in the dialog box.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/spreadsheet/local-data-binding-cs5/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/spreadsheet/local-data-binding-cs5/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/local-data-binding-cs5/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/spreadsheet/local-data-binding-cs5" %}

## Unprotect Workbook

Unprotect Workbook is used to enable the insert, delete, rename, move, copy, hide or unhide sheets feature  in the spreadsheet.

**User Interface**:

In the active Spreadsheet, the workbook Unprotection can be done in any of the following ways:

* Select the `Unprotect Workbook` item in the Ribbon toolbar under the Data Tab and provide the valid password in the dialog box.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/angular-ui-components/angular-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://ej2.syncfusion.com/angular/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Hyperlink](./link)