---
layout: post
title: Clip mode in Angular Grid component | Syncfusion
description: Learn here all about Clip mode in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Clip mode 
documentation: ug
domainurl: ##DomainURL##
---

# Clip mode in Angular Grid component

The clip mode provides options to display its overflow cell content and it can be defined by the [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#clipmode) property.

There are three types of [`clipMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#clipmode). They are:

* **Clip**: Truncates the cell content when it overflows its area.
* **Ellipsis**: Displays ellipsis when the cell content overflows its area.
* **EllipsisWithTooltip**: Displays ellipsis when the cell content overflows its area, also it will display the tooltip while hover on ellipsis is applied.
also it will display the tooltip while hover on ellipsis is applied.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/clipmode-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/clipmode-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/clipmode-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/clipmode-cs1" %}

>By default, [`columns.clipMode`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#clipmode) value is **Ellipsis**.