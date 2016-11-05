import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class FeedbackService {

    firebaseRef:any;
    firebaseAuth:any;
    firebaseDb:any;

    constructor() {
        this.firebaseRef = firebase;
        this.firebaseAuth = firebase.auth();
        this.firebaseDb = firebase.database().ref();
    }

    getAdminTasksForFeedback(){
        let adminUserId = JSON.parse(localStorage.getItem('adminUser')).userId;
        let tasksForFeedbackPath = this.firebaseDb.child(`users/${adminUserId}/tasks`).orderByChild('relation').equalTo('feedback');
        return this.getRecords(tasksForFeedbackPath);

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