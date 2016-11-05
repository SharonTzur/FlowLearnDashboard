import {Component, ViewChild} from '@angular/core';
import {StudentsService} from "../../shared/students/students.service";
import {LoginService} from "../../login/login.service";
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FeedbackService} from "./feedback-service";


@Component({
    moduleId: module.id,
    selector: 'feedback-cmp',
    templateUrl: 'feedback.component.html',
    styleUrls: ['feedback-style.css']
})
export class FeedbackComponent {

    tasksForFeedback:any;
    tasksKeys:any;

    constructor(private studService: StudentsService, private feedbackService: FeedbackService, private route: ActivatedRoute) {
            this.feedbackService.getAdminTasksForFeedback().subscribe((tasksForFeedback)=>{
                this.tasksForFeedback = tasksForFeedback;
                this.tasksKeys = Object.keys(tasksForFeedback);
            });
    }

    ngOnInit() {

    }

    public tabs: Array<any> = [
        {title: 'Title 1', content: 'Dynamic content 1'},
        {title: 'Title 2', content: 'Dynamic content 2', disabled: true},
        {title: 'Title 3', content: 'Dynamic content 3'}
    ];

    public setActiveTab(index:number):void {
        this.tabs[index].active = true;
    };


}
