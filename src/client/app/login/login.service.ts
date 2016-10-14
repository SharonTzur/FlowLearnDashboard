import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable()
export class LoginService {
  firebaseRef: any;
  firebaseAuth: any;
  firebaseDb: any;
  provider: any;
  adminUser : any;
  public adminUserObs:ReplaySubject<any> = new ReplaySubject(1);

  constructor() {
    this.firebaseRef = firebase;
    this.firebaseAuth = firebase.auth();
    this.firebaseDb = firebase.database().ref();

  };

  signInWithGoogle() {
    this.provider = new this.firebaseRef.auth.GoogleAuthProvider();
    return this.firebaseAuth.signInWithPopup(this.provider).then((result:any) => {
      this.getUserById(result.user.uid);
    }).catch(function (error:any) {
      console.log(error)
    });
  }

  getAdmin(){
    return JSON.parse(localStorage.getItem('adminUser'));
  }

  getUserById(reqUserId: any) {
    this.firebaseDb.child('users/'+reqUserId).on("value", (user)=>{
      localStorage.setItem('adminUser',JSON.stringify(user.val()))
      this.adminUser = user.val();
      this.adminUserObs.next(user.val());
    });
  };
}
