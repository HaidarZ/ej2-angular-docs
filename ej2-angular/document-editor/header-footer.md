---
layout: post
title: Header footer in Angular Document editor component | Syncfusion
description: Learn here all about Header footer in Syncfusion Angular Document editor component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Header footer 
documentation: ug
domainurl: ##DomainURL##
---

# Header footer in Angular Document editor component

Document Editor supports headers and footers in its document. Each section in the document can have the following types of headers and footers:

* First page: Used only on the first page of the section.
* Even pages: Used on all even numbered pages in the section.
* Default: Used on all pages of the section, where first or even pages are not applicable or not specified.

You can define this by setting format properties of the corresponding section using the following sample code.

```typescript
//Defines whether different header footer is required for first page of the section
this.documentEditor.selection.sectionFormat.differentFirstPage = true;
//Defines whether different header footer is required for odd and even pages in the section
this.documentEditor.selection.sectionFormat.differentOddAndEvenPages = true;
```

## Go to header footer region

Double click in header or footer region to move the selection into it. You can also do this by using the following code.

```typescript
this.documentEditor.selection.goToHeader();
```

```typescript
this.documentEditor.selection.goToFooter();
```

## Header and footer distance

You can define the distance of header region content from the top of the page. Refer to the following sample code.

```typescript
this.documentEditor.selection.sectionFormat.headerDistance = 36;
```

Same way, you can define the distance of footer region content from the bottom of the page. Refer to the following sample code.

```typescript
this.documentEditor.selection.sectionFormat.footerDistace = 36;
```

## Close header footer region

Move the selection to the document body from header or footer region by double clicking or tapping the document area. You can also perform this by using the following sample code.

```typescript
this.documentEditor.selection.closeHeaderFooter()
```

## See Also

* [Working with Section Formatting](../document-editor/section-format/)