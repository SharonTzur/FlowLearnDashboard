import {Component} from '@angular/core';
import {StudentsService} from "../../shared/students/students.service";
import {LoginService} from "../../login/login.service";

@Component({
	moduleId: module.id,
	selector: 'students-cmp',
	templateUrl: 'students.component.html'
})
export class StudentsComponent {
  communities : any;

  constructor(private auth: LoginService, private studService: StudentsService){
    this.communities = this.auth.getAdmin().communities;
  }

  getStudentsByCommunityId(communityId){
    this.studService.getStudentsByCommunityId(communityId);
  }

}
