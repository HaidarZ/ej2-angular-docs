


import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import {Toolbar} from '@syncfusion/ej2-navigations';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
import { ToolbarItem } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template:
       `
        <ejs-toolbar (created)="onCreate($event)">
        <e-items>
         <e-item template=' <input id="numeric" type="text" />' type = 'Input'></e-item>
        </e-items>
        </ejs-toolbar>
        <ejs-gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data: object[];
    public taskSettings: object;
     public templateEle: any = new NumericTextBox({ format: 'c2', value: 1, width: 150 });
    public ngOnInit(): void {
        this.data = [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
                ]
            },
        ];
        this.taskSettings = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
    }
    public onCreate (e: any) {
      this.templateEle.appendTo('#numeric');
    }
}



