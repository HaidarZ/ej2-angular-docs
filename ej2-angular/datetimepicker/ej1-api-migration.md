---
layout: post
title: Ej1 api migration in Angular Datetimepicker component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion Angular Datetimepicker component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Ej1 api migration 
documentation: ug
domainurl: ##DomainURL##
---

# Ej1 api migration in Angular Datetimepicker component

This article describes the API migration process of DateTimePicker component from Essential JS 1 to Essential JS 2.

## DateTime Selection

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Setting the Value
</td>
<td>
<b>Property:</b> <i>value</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" value='5/5/2019 2:00 AM'/>
```

</td>
<td>
<b>Property:</b> <i>value</i

```html
<ejs-datetimepicker id="datetimepicker" value='5/5/2019 3:00 AM'></ejs-datetimepicker>
```

</td>
</tr>
</thead>
</table>

## DateTime Format

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Display datetime format
</td>
<td>
<b>Property:</b> <i>dateTimeFormat</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" dateTimeFormat= 'd/MMM/yy tt h:mm'/>
```

</td>
<td>
<b>Property:</b> <i>format</i>

```html
<ejs-datetimepicker id="datetimepicker" format="dd/MM/yyyy hh:mm a"></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Day header format
</td>
<td>
<b>Property:</b> <i>dayHeaderFormat</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" dayHeaderFormat='long'/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
</thead>
</table>

## Calendar Views

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Start view
</td>
<td>
<b>Property:</b> <i>startLevel</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" startLevel="year"/>
```

</td>
<td>
<b>Property:</b> <i>start</i>

```html
<ejs-datetimepicker id="datetimepicker" start="Decade"></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Depth view
</td>
<td>
<b>Property:</b> <i>depthLevel</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" depthLevel="year"/>
```

</td>
<td>
<b>Property:</b> <i>depth</i>

```html
<ejs-datetimepicker id="datetimepicker" depth="Year"></ejs-datetimepicker>
```

</td>
</tr>
</thead>
</table>

## Date Range

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Minimum datetime
</td>
<td>
<b>Property:</b> <i>minDateTime</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" minDateTime="5/5/2019 4:00 AM"/>
```

</td>
<td>
<b>Property:</b> <i>min</i>

```html
<ejs-datetimepicker id="datetimepicker" min="5/5/2019 3:00 AM"></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Maximum datetime
</td>
<td>
<b>Property:</b> <i>maxDateTime</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" maxDateTime="5/5/2019 4:00 AM"/>
```

</td>
<td>
<b>Property:</b> <i>max</i>

```html
<ejs-datetimepicker id="datetimepicker" max="5/5/2019 3:00 AM"></ejs-datetimepicker>
```

</td>
</tr>
</thead>
</table>

## Disabled Dates

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Disabled dates
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker id="datetimepicker" #datetimeObj (renderDayCell)="disabledDatetime($event)"></ejs-datetimepicker>
```

```ts
public disabledDatetime(args: any): void {
    /*Date need to be disabled*/
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
    }
}
```

</td>
</tr>
</thead>
</table>

## Customization

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
CSS Class
</td>
<td>
<b>Property:</b> <i>cssClass</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" cssClass="gradient-lime"/>
```

</td>
<td>
<b>Property:</b> <i>cssClass</i>

```html
<ejs-datetimepicker id="datetimepicker" cssClass="gradient-lime"></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Show/Hide the today button
</td>
<td>
<b>Can be achieved by</b>

```html
<input type="text" ej-datetimepicker id="datetimepicker" cssClass="e-custom-class"/>
```

```css
.e-datetime-popup.e-popup.e-custom-class .e-button-container {
    display: none !important;
}
```

</td>
<td>
<b>Property:</b> <i>showTodayButton</i>

```html
<ejs-datetimepicker id="datetimepicker" [showTodayButton]="false"></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Show/Hide the other month dates
</td>
<td>
<b>Property:</b> <i>showOtherMonths</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [showOtherMonths]="false"/>
```

</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker id="datetimepicker"></ejs-datetimepicker>
```

```css

.e-DateTimePicker .e-calendar .e-content tr.e-month-hide, .e-DateTimePicker .e-calendar .e-content td.e-other-month > .e-day {
    visibility: none;
}

.e-DateTimePicker .e-calendar .e-content td.e-month-hide, .e-DateTimePicker .e-calendar .e-content td.e-other-month {
    pointer-events: none;
    touch-action: none;
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the popup button
</td>
<td>
<b>Property:</b> <i>showPopupButton</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [showPopupButton]="false"/>
```

</td>
<td>
<b>Event:</b> <i>focus</i>

```html
<ejs-datetimepicker id="datetimepicker" #datetimeObj (focus)="onFocus($event)"></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public onFocus(args:any): void {
    this.datetimeObj.show();
}
```

```css
.e-control-wrapper .e-input-group-icon.e-date-icon {
    display: none;
}
```

</td>
</tr>
<tr>
<td>
Enable/Disable the rounded corner
</td>
<td>
<b>Property:</b> <i>showRoundedCorner</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [showRoundedCorner]="true"/>
```

</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker id="datetimepicker"  cssClass="e-custom-style"></ejs-datetimepicker>
```

```css
.e-control-wrapper.e-custom-style.e-date-wrapper.e-input-group {
    border-radius: 4px;
}
```

</td>
</tr>
<tr>
<td>
Skip a month
</td>
<td>
<b>Property:</b> <i>stepMonths</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [stepMonths]="2"/>
```

</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker id="datetimepicker"  #datetimeObj value='5/5/2019' (open)="onOpen($event)"></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public onOpen(args) {
    this.datetimeObj.navigateTo('Year', new Date("03/8/2018"));
}
```

</td>
</tr>
<tr>
<td>
Show/Hide the tooltip
</td>
<td>
<b>Property:</b> <i>showTooltip</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [showTooltip]="false"/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Interval
</td>
<td>
<b>Property:</b> <i>interval</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [interval]="60"/>
```

</td>
<td>
<b>Property:</b> <i>step</i>

```html
<ejs-datetimepicker id="datetimepicker" step='120'></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Button text
</td>
<td>
<b>Property:</b> <i>buttonText</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [buttonText]="buttonText"/>
```

```ts
buttonText: Object = { done: "Ok" }
```

</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker id="datetimepicker" locale='en'></ejs-datetimepicker>
```

```ts
L10n.load({
    'en': {
            'datetimepicker': { today: 'Now' }
        }
});
```

</td>
</tr>
<tr>
<td>
Enable/Disable the animation
</td>
<td>
<b>Property:</b> <i>enableAnimation</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [enableAnimation]="false"/>
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
FocusIn method
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>focusIn()</i>

```html
<ejs-datetimepicker id="datetimepicker" #datetimeObj  (created)="create($event)" ></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public create(args:any): void{
    this.datetimeObj.focusIn();
}
```

</td>
</tr>
<tr>
<td>
FocusOut method
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>focusOut()</i>

```html
<ejs-datetimepicker id="datetimepicker" #datetimeObj  (created)="create($event)" ></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public create(args:any): void{
    this.datetimeObj.focusIn();
    this.datetimeObj.focusOut();
}
```

</td>
</tr>
<tr>
<td>
Prevent popup close
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>Close</i>

```html
<ejs-datetimepicker id="datetimepicker"  (close)="onClose($event)" ></ejs-datetimepicker>
```

```ts
public onClose(args:any): void{
     args.cancel = true;
}
```

</td>
</tr>
<tr>
<td>
Prevent popup open
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>Open</i>

```html
<ejs-datetimepicker id="datetimepicker"  (open)="onOpen($event)" ></ejs-datetimepicker>
```

```ts
public onOpen(args:any): void{
     args.cancel = true;
}
```

</td>
</tr>
</thead>
</table>

## Accessibility

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the RTL
</td>
<td>
<b>Property:</b> <i>enableRTL</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [enableRTL]="true"/>
```

</td>
<td>
<b>Property:</b> <i>enableRtl</i>

```html
<ejs-datetimepicker id="datetimepicker" enableRtl="true" ></ejs-datetimepicker>
```

</td>
</tr>
</thead>
</table>

## Persistence

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Enable/Disable the persistence
</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [enablePersistence]="true"/>
```

</td>
<td>
<b>Property:</b> <i>enablePersistence</i>

```html
<ejs-datetimepicker id="datetimepicker" enablePersistence="true" ></ejs-datetimepicker>
```

</td>
</tr>
</thead>
</table>

## Validation

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Validation rules
</td>
<td>
<b>Property:</b> <i>validationRules</i>

```html
<input type="text" ej-datetimepicker id="timePicker"  [validationRules]="validationRules" />
```

```ts
validationRules:Object;
constructor(){
    this.validationRules = {required:true};
}
```

</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker id="datetimepicker" floatLabelType='Always'></ejs-datetimepicker>
```

```ts
let options: FormValidatorModel = {
    rules: {
        'datetimepicker': { required: [true, "Value is required"] } }};
        this.formObject = new FormValidator('#form-element', options);
```

</td>
</tr>
<tr>
<td>
Validation message
</td>
<td>
<b>Property:</b> <i>validationMessage</i>

```html
<input type="text" ej-datetimepicker id="timePicker"  [validationRules]="validationRules" [validationMessage]="validationMessage"/>
```

```ts
validationRules:Object;
validationMessage:Object;
constructor(){
    this.validationMessage = {required: "Required DateTime value"};
    this.validationRules = {required:true};
}
```

</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker #datetimepicker id="datetimepicker" floatLabelType='Always'></ejs-datetimepicker>
```

```ts
let options: FormValidatorModel = {
    rules: {
        'datetimepicker': {
                    required: [true, "Value is required"]
                }
            },
            customPlacement: (inputElement: HTMLElement, errorElement: HTMLElement) => {
                inputElement.parentElement.parentElement.appendChild(errorElement);
            }
        };
this.formObject = new FormValidator('#form-element', options);
```

</td>
</tr>
</thead>
</table>

## Common

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Width
</td>
<td>
<b>Property:</b> <i>Width</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" width="200px"/>
```

</td>
<td>
<b>Property:</b> <i>Width</i>

```html
<ejs-datetimepicker id="datetimepicker" width="300px" ></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Readonly
</td>
<td>
<b>Property:</b> <i>ReadOnly</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [readOnly]="true"/>
```

</td>
<td>
<b>Property:</b> <i>Readonly</i>

```html
<ejs-datetimepicker id="datetimepicker" value="5/5/2019" readonly="true" ></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Show/Hide the clear button
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>showClearButton</i>

```html
<ejs-datetimepicker id="datetimepicker" [showClearButton]="false" ></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Height
</td>
<td>
<b>Property:</b> <i>Height</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" height="35px"/>
```

</td>
<td>
<b>Can be achieved by</b>

```html
<ejs-datetimepicker id="datetimepicker" cssClass='e-custom-style' ></ejs-datetimepicker>
```

```css
.e-control-wrapper.e-custom-style.e-date-wrapper.e-input-group {
    height: 35px;
}
```

</td>
</tr>
<tr>
<td>
Html Attributes
</td>
<td>
<b>Property:</b> <i>HtmlAttributes</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [htmlAttributes]="htmlAttributes"/>
```

```ts
htmlAttributes: Object = {required:"required"}
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
<tr>
<td>
Show/Hide the week number
</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [weekNumber]="true"/>
```

</td>
<td>
<b>Property:</b> <i>weekNumber</i>

```html
<ejs-datetimepicker id="datetimepicker" weekNumber="true" ></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Watermark text
</td>
<td>
<b>Property:</b> <i>watermarkText</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" watermarkText="Enter date and time"/>
```

</td>
<td>
<b>Property:</b> <i>Placeholder</i>

```html
<ejs-datetimepicker id="datetimepicker" placeholder="Enter DateTime" ></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Disable/Enable
</td>
<td>
<b>Property:</b> <i>enabled</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [enabled]="false"/>
```

</td>
<td>
<b>Property:</b> <i>enabled</i>

```html
<ejs-datetimepicker id="datetimepicker" [enabled]="false" ></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Enable/Disable the textbox editing
</td>
<td>
<b>Property:</b> <i>AllowEdit</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [allowEdit]="false"/>
```

</td>
<td>
<b>Property:</b> <i>AllowEdit</i>

```html
<ejs-datetimepicker id="datetimepicker" value="5/5/2010" [allowEdit]="false" ></ejs-datetimepicker>
```

</td>
</tr>

<tr>
<td>
zIndex
</td>
<td>
<b>Can be achieved by</b>

```html
<input type="text" ej-datetimepicker id="datetimepicker" cssClas="e-custom-class"/>
```

```css
.e-datetime-popup.e-popup.e-custom-class {
    z-index: 100 !important;
}
```

</td>
<td>
<b>Property:</b> <i>zIndex</i>

```html
<ejs-datetimepicker id="datetimepicker" zIndex="2000" ></ejs-datetimepicker>
```

</td>
</tr>

<tr>
<td>
Specify the placeholder text behavior
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Property:</b> <i>floatLabelType</i>

```html
<ejs-datetimepicker id="datetimepicker" floatLabelType="Always" placeholder="Enter DateTime"  ></ejs-datetimepicker>
```

</td>
</tr>
<tr>
<td>
Event callback for each cell creation
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>renderDayCell</i>

```html
<ejs-datetimepicker id="datetimepicker" (renderDayCell)="onRenderCell($event)" ></ejs-datetimepicker>
```

```ts
public onRenderCell(args:any):void
{/** code block */}
```

</td>
</tr>
<tr>
<td>
FocusIn event
</td>
<td>
<b>Event:</b> <i>FocusIn</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (focusIn)="onFocus($event)"/>
```

```ts
public onFocus(e:any) {  /*Triggers when the popup gets focus*/ }
```

</td>
<td>
<b>Event:</b> <i>focus</i>

```html
<ejs-datetimepicker id="datetimepicker" (focus)="onFocus($event)" ></ejs-datetimepicker>
```

```ts
public onFocus(args:any):void{
    /** code block */
}
```

</td>
</tr>
</tr>
<tr>
<td>
FocusOut event
</td>
<td>
<b>Event:</b> <i>focusOut</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (focusOut)="onFocusout($event)"/>
```

```ts
public onFocusout(e:any) { /*Triggers when the popup gets focusout*/ }
```

</td>
<td>
<b>Event:</b> <i>blur</i>

```html
<ejs-datetimepicker id="datetimepicker" (blur)="onBlur($event)" ></ejs-datetimepicker>
```

```ts
public onBlur(args:any):void{
    /** code block */
}
```

</td>
</tr>
<tr>
<td>
Change event
</td>
<td>
<b>Event:</b> <i>change</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (ejchange)="onChange($event)"/>
```

```ts
public onChange(e:any) { /*Triggers when the value is changed*/ }
```

</td>
<td>
<b>Event:</b> <i>change</i>

```html
<ejs-datetimepicker id="datetimepicker" (change)="onChange($event)" ></ejs-datetimepicker>
```

```ts
public onChange(args:any):void{
    /** code block */
}
```

</td>
</tr>
<tr>
<td>
Created event
</td>
<td>
<b>Event:</b> <i>create</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (create)="onCreate($event)"/>
```

```ts
public onCreate(e:any) { /*Triggers when the control is created*/ }
```

</td>
<td>
<b>Event:</b> <i>created</i>

```html
<ejs-datetimepicker id="datetimepicker" (created)="onCreate($event)" ></ejs-datetimepicker>
```

```ts
public onCreate(args:any):void{
    /** code block */
}
```

</td>
</tr>
<tr>
<td>
Destroy event
</td>
<td>
<b>Event:</b> <i>Destroy</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (destroy)="onDestroy($event)"/>
```

```ts
public onDestroy(e:any) { /*Triggers when the control is destroyed*/ }
```

</td>
<td>
<b>Event:</b> <i>destroyed</i>

```html
<ejs-datetimepicker id="datetimepicker" #datetimeObj (destroyed)="onDestroyed($event)" (change)="onChange($event)" ></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public onDestroyed(args:any):void{
   console.log("destroyed")
}

public onChange(args:any):void{
  this.datetimeObj.destroy();
}
```

</td>
</tr>
</thead>
</table>

## Globalization

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Locale
</td>
<td>
<b>Property:</b> <i>locale</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" locale="en-US"/>
```

</td>
<td>
<b>Property:</b> <i>locale</i>

```html
<ejs-datetimepicker id="datetimepicker" locale="en" ></ejs-datetimepicker>
```

</td>
</tr>

<tr>
<td>
Specify the start day of week
</td>
<td>
<b>Property:</b> <i>startDay</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [startDay]="2"/>
```

</td>
<td>
<b>Property:</b> <i>firstDayOfWeek</i>

```html
<ejs-datetimepicker id="datetimepicker" [firstDayOfWeek]="3" ></ejs-datetimepicker>
```

</td>
</tr>
</thead>
</table>

## Strict Mode

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Strict mode
</td>
<td>
<b>Property:</b> <i>enableStrictMode</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [enableStrictMode]="true"/>
```

</td>
<td>
<b>Property:</b> <i>strictMode</i>

```html
<ejs-datetimepicker id="datetimepicker" min="5/5/2019" max="6/6/2019" value="7/7/2019" [strictMode]="true" ></ejs-datetimepicker>
```

</td>
</tr>
</thead>
</table>

## Open and Close

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Close
</td>
<td>
<b>Event:</b> <i>Close</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (close)="onClose($event)"/>
```

```ts
public onClose(e:any) { /*Triggers when the poupup gets closed*/ }
```

</td>
<td>
<b>Event:</b> <i>close</i>

```html
<ejs-datetimepicker id="datetimepicker" (close)="onClose($event)"></ejs-datetimepicker>
```

```ts
public onClose(args:any): void { /*Triggers when the poupup gets closed*/ }
```

</td>
</tr>
<tr>
<td>
Hide
</td>
<td>
<b>Method:</b> <i>hide()</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (create)="onCreate($event)"/>
```

```ts
public onCreate(e:any) {
    var datetimeObject = $("#datetimepicker").data("ejDateTimePicker");
    datetimeObject.show();
    datetimeObject.hide();
}
```

</td>
<td>
<b>Method:</b> <i>hide()</i>

```html
<ejs-datetimepicker id="datetimepicker" (created)="onCreate($event)"></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public onCreate(args:any): void {
    this.datetimeObj.show();
     this.datetimeObj.hide();
 }
```

</td>
</tr>
<tr>
<td>
Open
</td>
<td>
<b>Event:</b> <i>open</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (open)="onOpen($event)"/>
```

```ts
public onOpen(e:any) { /*Triggers when the poupup gets closed*/ }
```

</td>
<td>
<b>Event:</b> <i>open</i>

```html
<ejs-datetimepicker id="datetimepicker" (open)="onOpen($event)"></ejs-datetimepicker>
```

```ts
public onOpen(args:any): void { /*Triggers when the poupup gets closed*/ }
```

</td>
</tr>
<tr>
<td>
Show
</td>
<td>
<b>Method:</b> <i>show()</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" (create)="onCreate($event)"/>
```

```ts
public onCreate(e:any) {
    var datetimeObject = $("#datetimepicker").data("ejDateTimePicker");
    datetimeObject.show();
}
```

</td>
<td>
<b>Method:</b> <i>show()</i>

```html
<ejs-datetimepicker id="datetimepicker" (created)="onCreate($event)"></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public onCreate(args:any): void {
    this.datetimeObj.show();
     this.datetimeObj.hide();
 }
```

</td>
</tr>
</thead>
</table>

## View Navigation

<!-- markdownlint-disable MD033 -->
<table>
<thead>
<tr>
<th>Behavior</th>
<th>API in Essential JS 1</th>
<th>API in Essential JS 2</th>
</tr>
<tr>
<td>
Navigate to specific month
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Method:</b> <i>navigateTo()</i>

```html
<ejs-datetimepicker id="datetimepicker"  #datetimeObj value='5/5/2019' (open)="onOpen($event)"></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public onOpen(args) {
    this.datetimeObj.navigateTo('Year', new Date("03/8/2018"));
}
```

</td>
</tr>
<tr>
<td>
Navigation callback
</td>
<td>
<b>Not Applicable</b>
</td>
<td>
<b>Event:</b> <i>navigated</i>

```html
<ejs-datetimepicker id="datetimepicker"  #datetimeObj  (navigated)="onNavigated($event)"></ejs-datetimepicker>
```

```ts
@ViewChild("datetimeObj") datetimeObj: DateTimePickerComponent;

public onNavigated(args) {
    /** code block */
}
```

</td>
</tr>
<tr>
<td>
Enable/Disable the drill down
</td>
<td>
<b>Property:</b> <i>timeDrillDown</i>

```html
<input type="text" ej-datetimepicker id="datetimepicker" [timeDrillDown]="timeDrillDown"/>
```

```ts
timeDrillDown: Object = { showMeridian: true , interval: 10 , enabled: true }
```

</td>
<td>
<b>Not Applicable</b>
</td>
</tr>
</thead>
</table>