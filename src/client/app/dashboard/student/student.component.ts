import {Component, ViewChild} from '@angular/core';
import {StudentsService} from "../../shared/students/students.service";
import {LoginService} from "../../login/login.service";
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';

@Component({
    moduleId: module.id,
    selector: 'student-cmp',
    templateUrl: 'student.component.html',
    styleUrls: ['student-style.css']
})
export class StudentComponent {

    constructor() {

    }

}
