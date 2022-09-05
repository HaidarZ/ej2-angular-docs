---
layout: post
title: Localization in Angular Common control | Syncfusion
description: Learn here all about Localization in Syncfusion ##Platform_Name## Common control of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: common
publishingplatform: ##Platform_Name##
documentation: ug
---

# Localization in Angular Common component

Localization library allows you to localize the text content of the Syncfusion Angular UI Components.

## Loading Translations

To load a translation object in your application use [`load`](https://ej2.syncfusion.com/documentation/api/base/l10n#load) function of `L10n` class.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/common/locale-cs1/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/common/locale-cs1/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/common/locale-cs1/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://ej2.syncfusion.com/angular/documentation/code-snippet/common/locale-cs1" %}

## Changing Current Locale

Current locale can be changed for all the Syncfusion Angular UI Components in your application by
invoking `setCulture` function with your desired culture name.

```typescript
import {L10n, setCulture} from '@syncfusion/ej2-base';
L10n.load({
    'fr-BE': {
       'Button': {
             'id': 'Numéro de commande',
             'date':'Date de commande'
         }
     }
});
setCulture('fr-BE');
```

>Note: Before changing a culture globally, you need to ensure that locale text for the concern   culture is loaded through `L10n.load` function.
