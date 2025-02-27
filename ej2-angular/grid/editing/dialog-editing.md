---
layout: post
title: Dialog editing in Angular Grid component | Syncfusion
description: Learn here all about Dialog editing in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Dialog editing 
documentation: ug
domainurl: ##DomainURL##
---

# Dialog editing in Angular Grid component

In Dialog edit mode, when you start editing the currently selected row data will be shown on a dialog. You can change the cell values and save edited data to the data source. To enable Dialog edit, set the [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Dialog**.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs7/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs7/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs7/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/edit-cs7" %}

## Customize edit dialog

You can customize the appearance of the edit dialog in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event based on **requestType** as **beginEdit** or **add**.

In the following example, the dialog's properties like header text, showCloseIcon, height have been changed while editing and adding the records.

Also the locale text for the **Save** and **Cancel** buttons has been changed by overriding the default locale strings.

You can refer the Grid [`Default text`](../global-local/) list for more localization.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/edit-cs8" %}

> The Grid add or edit dialog element has the max-height property, which is calculated based on the available window height. So, in the normal window (1920 x 1080), it is possible to set the dialog's height up to 658px.

## Show or hide columns in dialog editing

The Grid has the option to show hidden columns or hide visible columns while editing in the dialog edit mode by using the [actionBegin](https://ej2.syncfusion.com/angular/documentation/api/grid/#actionbegin) event of the Grid.

In the `actionBegin` event, when the `requestType` is `beginEdit` or add, the column will be shown or hidden using the `column.visible` property. When the `requestType` is `save`, the properties will be reset to their original state.

In the following example, the CustomerID column is rendered as a hidden column, and the ShipCountry column is rendered as a visible column. In the edit mode, the CustomerID column will be changed to a visible state and the ShipCountry column will be changed to a hidden state.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/edit-cs9" %}

## Use wizard like dialog editing

Wizard helps you create intuitive step-by-step forms to fill. You can achieve the wizard like editing by using the dialog template feature. It support your own editing template by defining [`editSettings.mode`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#mode) as **Dialog** and [`editSettingsTemplate`](https://ej2.syncfusion.com/angular/documentation/api/grid/editSettings/#template) as template variable to define the editors.

The following example demonstrate the wizard like editing in the grid with the unobtrusive Validation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/wizardtemplate-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight html tabtitle="wizardtemplate.html" %}
{% include code-snippet/grid/wizardtemplate-cs1/app/wizardtemplate.html %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/wizardtemplate-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/wizardtemplate-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/wizardtemplate-cs1" %}

## Customize Add/Edit Dialog footer

In dialog edit mode, a dialog will show up when editing the currently selected row or adding a new row. By default, you can save or cancel the edited changes by clicking the Save or Cancel button in the dialog's footer. Along with these buttons, it is possible to add a custom button in the footer section using the [actionComplete](https://ej2.syncfusion.com/angular/documentation/api/grid/#actioncomplete) event of the Grid.

In the following sample, using the `dialog` argument of the `actionComplete` event, the action for the custom button can be customized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/edit-cs10/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/edit-cs10/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/edit-cs10/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/edit-cs10" %}