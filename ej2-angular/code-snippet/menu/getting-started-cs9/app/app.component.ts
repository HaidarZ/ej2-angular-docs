

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { MenuItemModel, MenuAnimationSettingsModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Menu. -->
            <ejs-menu [items]='menuItems' showItemOnClick = "true"></ejs-menu>`
})

export class AppComponent {

    public menuItems: MenuItemModel[] = [
        {
            text: 'File',
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ]
        },
        {
            text: 'View',
            items: [
                {
                    text: 'Toolbars',
                    items: [
                        { text: 'Menu Bar' },
                        { text: 'Bookmarks Toolbar' },
                        { text: 'Customize' },
                    ]
                },
                {
                    text: 'Zoom',
                    items: [
                        { text: 'Zoom In' },
                        { text: 'Zoom Out' },
                        { text: 'Reset' },
                    ]
                },
                { text: 'Full Screen' }
            ]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ]
        },
        { text: 'Go' },
        { text: 'Help' }
    ];
   }


