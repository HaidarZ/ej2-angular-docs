---
layout: post
title: Virtual scroll in Angular Grid component | Syncfusion
description: Learn here all about Virtual scroll in Syncfusion Angular Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtual scroll 
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scroll in Angular Grid component

Grid allows you to load large amount of data without performance degradation.

To use virtualization, you need to inject **VirtualScrollService** in Grid.

## Row Virtualization

Row virtualization allows you to load and render rows only in content viewport. It is an alternative way of paging in which the data will load while scrolling vertically.
To setup the row virtualization, you need to define [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablevirtualization) as true and content height by [`height`](https://ej2.syncfusion.com/angular/documentation/api/grid/#height) property.

The number of records displayed in the Grid is determined implicitly by height of content area. Also you have an option to define visible number of records by [`pageSettings.pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/#pagesize) property.
[`pageSettings.pageSize`](https://ej2.syncfusion.com/angular/documentation/api/grid/pageSettingsModel/#pagesize) property.
The loaded data will be cached and reused when it is needed for next time.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs8/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs8/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs8/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/paging1-cs8" %}

## Column Virtualization

Column virtualization allows you to virtualize columns. It will render columns which are in viewport.
You can scroll horizontally to view more columns.

To setup the column virtualization, set the [`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablevirtualization) and [`enableColumnVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablecolumnvirtualization) properties as `true`.
[`enableVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablevirtualization) and
[`enableColumnVirtualization`](https://ej2.syncfusion.com/angular/documentation/api/grid/#enablecolumnvirtualization) properties as `true`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/grid/paging1-cs9/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/grid/paging1-cs9/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/grid/paging1-cs9/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/code-snippet/grid/paging1-cs9" %}

> Column's [`width`](https://ej2.syncfusion.com/angular/documentation/api/grid/column/#width) is required for column virtualization.
If column's width is not defined then Grid will consider its value as **200px**.

## Virtualization with Grouping

Both the row and column virtualization can be used along with grouping. At initial rendering, the virtual height of scrollbar will be set based on the total number of records and after grouping, it will be refreshed based on the grouped state(expand/collapse). While collapse the group caption row in current viewport then the next view page grouped records are shown.

> The collapsed/expanded state will persist only for local dataSource while scrolling.

## Limitations for virtual scrolling

* While using column virtual scrolling, column width should be in pixel. Percentage values are not accepted.
* Due to the element height limitation in browsers, the maximum number of records loaded by the Grid is limited by the browser capability.
* The cell selection is not supported for both row and column virtual scrolling.
* Virtual scrolling is not compatible with batch editing, detail template, rowspan, colspan and hierarchy features.
* Group expand and collapse state will not be persisted for remote data.
* Since data is virtualized in grid, the aggregated information and total group items are displayed based on the current view items.
To get these information regardless of the view items, refer to the [`Group with Page`](./grouping#group-with-paging) topic.
* The page size provided must be two times larger than the number of visible rows in the grid. If the page size is failed to meet this condition then the size will be determined by grid.
* The height of the grid content is calculated using the row height and total number of records in the data source and hence features which changes row height such as text wrapping are not supported. If you want to increase the row height to accommodate the content then you can specify the row height as below to ensure all the table rows are in same height.
If the page size is failed to meet this condition then the size will be determined by grid.
* The height of the grid content is calculated using the row height and total number of records
in the data source and hence features which changes row height such as text wrapping are not supported.
If you want to increase the row height to accommodate the content then you can specify the
 row height as below to ensure all the table rows are in same height.

```css
.e-grid .e-row {
    height: 2em;
}
```

* Programmatic selection using [`selectRows`](https://ej2.syncfusion.com/angular/documentation/api/grid/#selectrows) method is not supported in virtual scrolling.

## Browser height limitation in virtual scrolling and solution

You can load millions of records in the Grid by using virtual scrolling, where the grid loads and renders rows on-demand while scrolling vertically. As a result, Grid lightens the browser’s load by minimizing the DOM elements and rendering elements visible in the viewport. The height of the grid is calculated using the Total Records Count * [Row Height](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowheight) property.

The browser has some maximum pixel height limitations for the scroll bar element. The content placed above the maximum height can't be scrolled if the element height is greater than the browser's maximum height limit. The browser height limit affects the virtual scrolling of the grid. When a large number of records are bound to the Grid, it can only display the records until the maximum height limit of the browser. Once the browser's height limit is reached while scrolling, the user won't able to scroll further to view the remaining records.

For example, if the row height is set as 30px and the total record count is 1000000(1 million), then the height of the grid element will be 30,000,000 pixels. In this case, the browser's maximum height limit for a div is about 22,369,600 (The maximum pixel height limitation differs for different browsers). The records above the maximum height limit of the browser can't be scrolled.

This height limitation is not related to the Grid component. It fully depends on the default behavior of the browser. The same issue is reproduced in the normal HTML table too.

The following image illustrates the height limitation issue of a normal HTML table in different browsers (Chrome and Firefox).

![Browser height limitation in HTML table](images/html-table.gif)

Grid component also faced the same issue as mentioned in the below image.

![Grid with browser height limitation](images/grid.gif)

The Grid has an option to overcome this limitation of the browser in the following ways.

### Solution 1: Using external buttons

You can prevent the height limitation problem in the browser when scrolling through millions of records by loading the segment of data through different strategy.

In the following sample, Grid is rendered with a large number of records(nearly 2 million). Here, you can scroll 0.5 million records at a time in Grid. Once you reach the last page of 0.5 million records, the **Load Next Set** button will be shown at the bottom of the Grid. By clicking that button, you can view the next set of 0.5 million records in Grid. Also, the **Load Previous Set** button will be shown at the top of the Grid to load the previous set of 0.5 million records.

Let's see the step by step procedure for how we can overcome the limitation in the Syncfusion Grid component.

1. Create a custom adaptor by extending UrlAdaptor and binding it to the grid DataSource property. In the processQuery method of the custom adaptor, we handled the Skip query based on the current page set to perform the data operation with whole records on the server.

    ```typescript
        class CustomUrlAdaptor extends UrlAdaptor {
            processQuery(args) {
                if (arguments[1].queries) {
                    for (const i = 0; i < arguments[1].queries.length; i++) {
                        if (arguments[1].queries[i].fn === 'onPage') {
                            // pageSet - defines the number of segments that we are going to split the 2million records. In this example we have considered 0.5 million records for each set so the pageSet is 1, 2, 3 and 4.
                            // maxRecordsPerPageSet – In this example we define the value as 0.5 million.

                            // gridPageSize – the pageSize that we have defined in the Grid pageSettings->pageSize property

                            // customize the pageIndex based on the current pageSet (It send the skip query including the previous pageSet ) so that the other operations performed for total 2millions records instead of 0.5 million alone.
                            arguments[1].queries[i].e.pageIndex = (((pageSet - 1) * maxRecordsPerPageSet) / gridPageSize) + arguments[1].queries[i].e.pageIndex;
                        }
                    }
                }
                let original = super.processQuery.apply(this, arguments);
                return original;
            }
        }
        this.data = new DataManager({
            adaptor: new CustomUrlAdaptor(),
            url: "Home/UrlDatasource"
        });
    ```

2. Render the grid by define the following features.

    ```typescript
        <ejs-grid #grid [dataSource]='data' [enableVirtualization]='true' [pageSettings]='pageSettings' [height]='360' (beforeDataBound)='beforeDataBound($event)' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                ......
                ......  
            </e-columns>
        </ejs-grid>
    ```

3. In the beforeDataBound event, we set the args.count as 0.5 million to perform scrolling with 0.5 million records and all the data operations are performed with whole records which is handled using the custom adaptor. And also particular segment records count is less than 0.5 million means it will directly assigned the original segmented count instead of 0.5 million.

    ```typescript
        beforeDataBound(args) {
            // storing the total records count which means 2 million records count
            totalRecords = args.count;

            // change the count with respect to maxRecordsPerPageSet (maxRecordsPerPageSet = 500000)
            args.count = args.count - ((pageSet - 1) * maxRecordsPerPageSet) > maxRecordsPerPageSet ?maxRecordsPerPageSet : args.count - ((pageSet - 1) * maxRecordsPerPageSet);
        }
    ```

4. Render “Load Next Set” button and “Load Previous Set” button at bottom and top of the grid component.

    ```typescript
        <button ejs-button cssClass="e-info prevbtn" (onClick)="prevBtnClick($event)" content="Load Previous Set..."></button>

        <ejs-grid #grid [dataSource]='data' [enableVirtualization]='true' [pageSettings]='pageSettings' [height]='360' (beforeDataBound)='beforeDataBound($event)' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                ......
                ......  
            </e-columns>
        </ejs-grid>

        <button ejs-button cssClass="e-info nxtbtn" (onClick)="nxtBtnClick($event)" content="Load Next Set..."></button>
    ```

5. While click on the `Load Next Set` / `Load Previous Set` button corresponding page data set is loaded to view remaining records of total 2 millions records after doing some simple calculation.

    ```typescript
        // Triggered when clicking the Previous/ Next button.
        prevNxtBtnClick(args) {
            if (grid.element.querySelector('.e-content') && grid.element.querySelector('.e-content').getAttribute('aria-busy') === 'false') {
                // Increase/decrease the pageSet based on the target element.
                pageSet = args.target.classList.contains('prevbtn') ? --pageSet : ++pageSet;
                this.rerenderGrid(); // Re-render the Grid component.
            }
        }
    ```

 You can view the hosted link for this sample [here](https://ej2.syncfusion.com/aspnetcore/Load_millions_of_records).

![Prevent browser height limitation](images/external-button.png)

> If you perform grid actions such as filtering, sorting, etc., after scrolling through the 0.5 million data, the Grid performs those data actions with the whole records, not just the current loaded 0.5 million data.

### Solution 2: Using RowHeight property

You can reduce the [row height](https://ej2.syncfusion.com/angular/documentation/grid/row/row-height/) using the [rowHeight](https://ej2.syncfusion.com/angular/documentation/api/grid/#rowheight) property of the Grid. It will reduce the overall height to accommodate more rows. But this approach optimizes the limitation, but if the height limit is reached after reducing row height also, you have to opt for the previous solution or use paging.

In the following image, you can see how many records will be scrollable when setting rowHeight to "36px" and "30px".

![Row Height](images/row-height.gif)

### Solution 3: Using paging instead of virtual scrolling

Similar to virtual scrolling, the [paging](https://ej2.syncfusion.com/angular/documentation/grid/paging/) feature also loads the data in an on-demand concept. Pagination is also compatible with all the other features(Grouping, Editing, etc.) in Grid. So, use the paging feature instead of virtual scrolling to view a large number of records in the Grid without any kind of performance degradation or browser height limitation.

## See also

* [How to load a million records in less than a second Grid](https://www.syncfusion.com/blogs/post/how-to-load-a-million-records-in-less-than-a-second-in-syncfusion-angular-data-grid.aspx)