


import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart valueField='value' targetField='target' title='Revenue' [minimum]='minimum' [maximum]='maximum'
  [interval]='interval' [dataSource]='data'  [animation]='animation' tickPosition='Inside'>
  <e-bullet-range-collection>
    <e-bullet-range end='20' color='#ebebeb'></e-bullet-range>
    <e-bullet-range end='25' color='#d8d8d8'></e-bullet-range>
    <e-bullet-range end='30' color='#7f7f7f'></e-bullet-range>
  </e-bullet-range-collection>
</ejs-bulletchart>`
})
export class AppComponent {
  public minimum: number = 0;
  public maximum: number = 30;
  public interval: number = 5;
  public data: Object[] = [
      { value: 23, target: 22 }
    ];
  public animation: AnimationModel = { enable: false };
}


