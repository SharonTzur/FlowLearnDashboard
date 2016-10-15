import {Component, ViewChild} from '@angular/core';
import {StudentsService} from "../../shared/students/students.service";
import {LoginService} from "../../login/login.service";
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'students-cmp',
    templateUrl: 'students.component.html',
    styleUrls: ['students-style.css']
})

export class StudentsComponent {
    @ViewChild('childModal') public childModal: ModalDirective;

    communities: any = [];
    communitiesIds: any = [];

    constructor(private auth: LoginService, private studService: StudentsService, private router: Router) {
        this.studService.getAdminCommunities();
        this.studService.adminCommunities.subscribe((adminCommunities) => {
            this.communitiesIds = adminCommunities;
        });
    }

    getStudentsByCommunityId(communityId) {
        this.studService.getStudentsByCommunityId(communityId);
    }

    convertIdsArrayToCommunityStudents(communityId) {
        if(communityId) {
            this.studService.convertIdsArrayToCommunityStudents(communityId);
        }
    }

    addStudentToCommunity(communityId, studentEmail) {
        this.studService.addStudentToCommunity(communityId, studentEmail);
    }

    goToStudentPage(studentKey){
        this.router.navigate(['/dashboard/students',studentKey]);

    }
}
