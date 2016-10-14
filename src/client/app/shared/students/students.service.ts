import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StudentsService {

  firebaseRef: any;
  firebaseAuth: any;
  firebaseDb: any;
  communityStudents: any = [];
  communityUsersPath: any;
  reqUserPath: any;

  constructor() {
    this.firebaseRef = firebase;
    this.firebaseAuth = firebase.auth();
    this.firebaseDb = firebase.database().ref();

  }

  getStudentsByCommunityId(communityId) {
    this.communityUsersPath = this.firebaseDb.child('communities/' + communityId + '/users');
    this.getUsers(this.communityUsersPath).subscribe((userIdsArr)=> {
      if(!userIdsArr  || !userIdsArr.length){return;}
      userIdsArr.forEach((userId)=> {
        this.reqUserPath = this.firebaseDb.child('users/' + userId);
        this.getUsers(this.reqUserPath).subscribe((user)=> {
          this.communityStudents.push(user);
          console.log( this.communityStudents);
        })
      })
    })
  }


  getUsers(ref) {
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

