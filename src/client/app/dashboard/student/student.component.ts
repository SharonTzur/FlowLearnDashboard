import {Component, ViewChild} from '@angular/core';
import {StudentsService} from "../../shared/students/students.service";
import {LoginService} from "../../login/login.service";
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'student-cmp',
    templateUrl: 'student.component.html',
    styleUrls: ['student-style.css']
})
export class StudentComponent {
    currentStudent: any;

    constructor(private studService: StudentsService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let studentId = params['id']; // (+) converts string 'id' to a number
            this.studService.getStudentById(studentId).subscribe((student)=> {
                this.currentStudent = student;
            })
        });

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
