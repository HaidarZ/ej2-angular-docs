---
layout: post
title: Accessibility in Angular Datepicker component | Syncfusion
description: Learn here all about Accessibility in Syncfusion Angular Datepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Accessibility 
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in Angular Datepicker component

The Web accessibility defines a way to make web content and web applications more accessible to disabled people. It especially helps the dynamic content change and advanced user interface controls developed with Ajax, HTML, JavaScript, and related technologies.

DatePicker provides built-in compliance with the [WAI-ARIA](http://www.w3.org/WAI/PF/aria-practices) specifications. WAI-ARIA supports is achieved through the attributes like `aria-expanded`, `aria-disabled`, `aria-activedescendant` applied for the input element.

It helps to provide information about the widget for assistive technology to the disabled person in a screen reader.

* **Aria-expanded** : attributes indicates the state of a collapsible element.

* **Aria-disabled** : attribute indicates the disabled state of this DatePicker component.

* **Aria-activedescendent** : attribute helps in managing the current active child of the DatePicker component.

For more information about accessibility of Calendar refer to the Calendar [Accessibility](http://npmci.syncfusion.com/development/angular/documentation/calendar/accessibility/) section.

## Keyboard Interaction

You can use the following keys to interact with the DatePicker.
The component implements the keyboard navigation support by following the  [WAI-ARIA practices](http://www.w3.org/WAI/PF/aria-practices).

It supports the below list of shortcut keys.

## Input Element

| **Press** | **To do this** |
| --- | --- |
| <kbd>Alt +  Down Arrow</kbd> | Opens the popup. |
| <kbd>Alt +  Up Arrow</kbd> | Closes the popup.|
| <kbd>Esc</kbd> | closes the popup. |

## Calendar Navigation

Use the below list of keys to navigate the Calendar after the popup has opened.

| **Press** | **To do this** |
| --- | --- |
| <kbd>Upper Arrow</kbd>  | Focus the previous week date. |
| <kbd>Down Arrow</kbd>  | Focus the next week date. |
| <kbd>Left Arrow</kbd>  | Focus the previous date. |
| <kbd>Right Arrow</kbd>  | Focus the next date. |
| <kbd>Home</kbd>  | Focus the first date in the month. |
| <kbd>End</kbd>  | Focus the last date in the month. |
| <kbd>Page Up</kbd>  | Focus the same date in the previous month. |
| <kbd>Page Down</kbd>  | Focus the same date in the next month. |
| <kbd>Enter</kbd>  | Select the currently focused date. |
| <kbd>Shift + Page Up</kbd>  | Focus the same date in the previous year. |
| <kbd>Shift + Page Down</kbd>  | Focus the same date in the next year. |
| <kbd>Control + Upper Arrow</kbd>  | Moves into the inner level of view like month-year, year-decade |
| <kbd>Control + Down Arrow</kbd>  | Moves out from the depth level view like decade-year, year-month |
| <kbd>Control + Home</kbd>  | Focus the starting date in the current year. |
| <kbd>Control + End</kbd>  | Focus the ending date in the current year. |

To focus the DatePicker component use the `alt+t` keys.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/datepicker/getting-started-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/datepicker/getting-started-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/datepicker/getting-started-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/datepicker/getting-started-cs1" %}