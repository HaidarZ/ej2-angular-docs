


import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
       `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [xAxis]='xAxis'  [yAxis]='yAxis'
       [titleSettings]='titleSettings' [cellSettings]='cellSettings' [showTooltip]='showTooltip'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{

dataSource: Object[] = [
   [0.72, 0.71, 0.71, 0.67, 0.72, 0.53, 0.53, 0.56, 0.58, 0.56],
    [2.28, 2.29, 2.09, 1.84, 1.64, 1.49, 1.49, 1.39, 1.32, 1.23],
    [2.02, 2.17, 2.30, 2.39, 2.36, 2.52, 2.62, 2.57, 2.57, 2.74],
    [3.21, 3.26, 3.45, 3.47, 3.42, 3.34, 3.14, 2.83, 2.64, 2.61],
    [3.22, 3.13, 3.04, 2.95, 2.69, 2.49, 2.27, 2.18, 2.06, 1.87],
    [3.30, 3.39, 3.40, 3.48, 3.60, 3.67, 3.73, 3.79, 3.79, 4.07],
    [5.80, 5.74, 5.64, 5.44, 5.18, 5.08, 5.07, 5.00, 5.35, 5.47],
    [6.91, 7.40, 8.13, 8.80, 9.04, 9.24, 9.43, 9.35, 9.49, 9.69]];

   titleSettings: Object = {
            text: 'Crude Oil Production of Non-OPEC Countries (in Million barrels per day)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        };
        xAxis: Object = {
            labels: ['Canada', 'China', 'Egypt', 'Mexico', 'Norway', 'Russia', 'UK', 'USA']
        };
        yAxis: Object = {
             labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
        };
        public cellSettings: Object = {
            showLabel: false,
        };
        public showTooltip: Boolean = true;
}



