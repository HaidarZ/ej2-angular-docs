


import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { EditSettingsModel } from '@syncfusion/ej2-angular-gantt';

@Component({
    selector: 'app-root',
    template:
       `
       <button ejs-button id='addRow' (click)='add()'>Add Row</button>
       <br><br><br>
       <ejs-gantt #gantt id="ganttDefault" height="430px" [dataSource]="data" [taskFields]="taskSettings" [editSettings]="editSettings" [toolbar]="toolbar"></ejs-gantt>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent{
    // Data for Gantt
    public data: object[];
    public taskSettings: object;
    public editSettings: EditSettingsModel;
    @ViewChild('gantt', {static: true})
    public ganttObj: GanttComponent;
    public ngOnInit(): void {
        this.data =  [
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
        this.editSettings = {
            allowAdding:true
            };
    }
    add(): void {
        let record: object = {
            TaskID: 9,
            TaskName: 'Identify Site location',
            StartDate: new Date('04/02/2019'),
            Duration: 3,
            Progress: 50
            };
            this.ganttObj.editModule.addRecord(record,'Below',2);
        };
}



