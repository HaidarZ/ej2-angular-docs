---
layout: post
title: Data labels in Angular Maps component | Syncfusion
description: Learn here all about Data labels in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Data labels 
documentation: ug
domainurl: ##DomainURL##
---

# Data labels in Angular Maps component

Data labels provide information to users about the shapes of the Maps component. It can be enabled by setting the [`visible`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#visible) property of the [`dataLabelSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/) to **true**.

## Adding data labels

To display data labels in the Maps, the [`labelPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#labelpath) property of [`dataLabelSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/) must be used. The value of the [`labelPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#labelpath) property can be taken from the field name in the shape data or data source. In the following example, the value of the [`labelPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#labelpath) property is the field name in the shape data of the Maps layer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs28/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs28/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs28/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/maps/default-map/datetime-cs28" %}

In the following example, the value of [`labelPath`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#labelpath) property is set from the field name in the data source of the layer settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs29/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs29/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs29/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/maps/default-map/datetime-cs29" %}

## Customization

The following properties are available in the [`dataLabelSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/) to customize the data label of the Maps component.

* [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#border) - To customize the color, width and opacity for the border of the data labels in Maps.
* [`fill`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#fill) - To apply the color of the data labels in Maps.
* [`opacity`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#opacity) - To customize the transparency of the data labels in Maps.
* [`textStyle`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#textstyle) - To customize the text style of the data labels in Maps.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs30/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs30/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs30/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/maps/default-map/datetime-cs30" %}

## Smart labels

The Maps component provides an option to handle the labels when they intersect with the corresponding shape borders using the [`smartLabelMode`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#smartlabelmode) property. The following options are available in the [`smartLabelMode`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#smartlabelmode) property.

* None
* Hide
* Trim

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs31/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs31/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs31/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/maps/default-map/datetime-cs31" %}

## Intersect action

The Maps component provides an option to handle the labels when a label intersects with another label using the [`intersectionAction`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#intersectionaction) property. The following options are available in the [`intersectionAction`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#intersectionaction) property.

* None
* Hide
* Trim

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs32/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs32/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs32/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/maps/default-map/datetime-cs32" %}

## Adding data label as a template

The data label can be added as a template in the Maps component. The [`template`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#template) property of [`dataLabelSettings`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel) is used to set the data label as a template. Any text or HTML element can be added as the template in data labels.

>The customization properties of data label, [`smartLabelMode`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#smartlabelmode) and [`intersectionAction`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#intersectionaction) properties are not applicable to [`template`](https://ej2.syncfusion.com/angular/documentation/api/maps/dataLabelSettingsModel/#template) property. The styles can be applied to the label template using the CSS styles of the template element.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs33/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs33/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs33/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/maps/default-map/datetime-cs33" %}