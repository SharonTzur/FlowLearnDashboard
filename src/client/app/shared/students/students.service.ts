import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ReplaySubject} from "rxjs";


@Injectable()
export class StudentsService {

    firebaseRef: any;
    firebaseAuth: any;
    firebaseDb: any;
    communityStudents: any = [];
    communityUsersPath: any;
    reqUserPath: any;
    communities: any = [];
    public adminCommunities: ReplaySubject<any> = new ReplaySubject(1);

    constructor() {
        this.firebaseRef = firebase;
        this.firebaseAuth = firebase.auth();
        this.firebaseDb = firebase.database().ref();
        this.communityStudents = [];

    }

    getAdminCommunities() {
        let adminCommunities = JSON.parse(localStorage.getItem('adminUser')).communities;
        Object.keys(adminCommunities).forEach((key)=> {
            let wantedCommunityId = adminCommunities[key].communityId;
            this.communityUsersPath = this.firebaseDb.child('communities/' + wantedCommunityId);
            this.getRecords(this.communityUsersPath).subscribe((communityObj)=> {
                this.communities[wantedCommunityId] = communityObj;
                this.adminCommunities.next(Object.keys(this.communities));
            })
        })
    }

    getStudentsByCommunityId(communityId) {
        this.communityStudents = [];
        this.communityUsersPath = this.firebaseDb.child('communities/' + communityId + '/users');
        this.getRecords(this.communityUsersPath).subscribe((userIds)=> {
            let userIdsArr = Object.keys(userIds);
            if (!userIdsArr || !userIdsArr.length) {
                return;
            }
            userIdsArr.forEach((userId)=> {
                this.reqUserPath = this.firebaseDb.child('users/' + userIds[userId]);
                this.getRecords(this.reqUserPath).subscribe((user)=> {
                    this.communityStudents.push(user);
                })
            })
        })
    }

    convertIdsArrayToCommunityStudents(communityId) {
        this.communityStudents=[];
        this.communityUsersPath = this.firebaseDb.child('communities/' + communityId + '/users');
        this.getRecords(this.communityUsersPath).subscribe((userIds)=> {
            this.communityStudents=[];
            Object.keys(this.communities[communityId].users).forEach((userIdKey)=> {
                let userId = this.communities[communityId].users[userIdKey];
                this.reqUserPath = this.firebaseDb.child('users/' + userId);
                this.getRecords(this.reqUserPath).subscribe((user)=> {
                    user["key"]=userId;
                    this.communityStudents.push(user);
                })
            })
        })
    }

    addStudentToCommunity(communityId, studentEmail) {
        this.firebaseDb.child('users').orderByChild("email").equalTo(studentEmail).once('value', (reqUser)=> {
            let newUser = reqUser.val();
            let newUserId = Object.keys(newUser)[0];
            this.firebaseDb.child('communities/' + communityId + '/users').push(newUserId);
            this.firebaseDb.child('users/' + newUserId + '/communities').push({
                'communityId': communityId,
                'role': 'student'
            })
        })
    }


    getStudentById(studentId){
        let studentPath = this.firebaseDb.child('users/'+studentId);
        return this.getRecords(studentPath);
    }


    getRecords(ref) {
        return Observable.create(function (observer: any) {
            function value(snapshot) {
                observer.next(snapshot.val());
            }

            ref.on('value', value);
            return (()=> {
                ref.off('value', value);

            })
        });
    }
}
