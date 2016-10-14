import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StudentsService {
  firebaseRef: any;
  firebaseAuth: any;
  firebaseDb: any;
  constructor() {
    this.firebaseRef = firebase;
    this.firebaseAuth = firebase.auth();
    this.firebaseDb = firebase.database().ref();

  }


  getStudentsByCommunityId(communityId) {

  }
}

