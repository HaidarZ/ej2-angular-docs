


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the DropDownTree component
    template: `<ejs-dropdowntree id='dropdownTree' [fields]='fields'></ejs-dropdowntree>`
})

export class AppComponent {
    constructor() {

    }
    public data: { [key: string]: Object; }[] = [
        {
            code: 'AF', name: 'Africa', countries: [
                { code: 'NGA', name: 'Nigeria' },
                { code: 'EGY', name: 'Egypt' },
                { code: 'ZAF', name: 'South Africa' }
            ]
        },
        {
            code: 'AS', name: 'Asia', expanded: true, countries: [
                { code: 'CHN', name: 'China' },
                { code: 'IND', name: 'India', selected: true },
                { code: 'JPN', name: 'Japan' }
            ]
        },
        {
            code: 'EU', name: 'Europe', countries: [
                { code: 'DNK', name: 'Denmark' },
                { code: 'FIN', name: 'Finland' },
                { code: 'AUT', name: 'Austria' }
            ]
        },
        {
            code: 'NA', name: 'North America', countries: [
                { code: 'USA', name: 'United States of America' },
                { code: 'CUB', name: 'Cuba' },
                { code: 'MEX', name: 'Mexico' }
            ]
        },
        {
            code: 'SA', name: 'South America', countries: [
                { code: 'BRA', name: 'Brazil' },
                { code: 'COL', name: 'Colombia' },
                { code: 'ARG', name: 'Argentina' }
            ]
        },
        {
            code: 'OC', name: 'Oceania', countries: [
                { code: 'AUS', name: 'Australia' },
                { code: 'NZL', name: 'New Zealand' },
                { code: 'WSM', name: 'Samoa' }
            ]
        },
        {
            code: 'AN', name: 'Antarctica', countries: [
                { code: 'BVT', name: 'Bouvet Island' },
                { code: 'ATF', name: 'French Southern Lands' }
            ]
        },
    ];
    public fields :Object = { dataSource: this.data, value: 'code', text: 'name', child: 'countries'  };
}



