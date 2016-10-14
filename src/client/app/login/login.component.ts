import {Component} from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from '@angular/router';
import {ReplaySubject} from "rxjs";

/**
 *  This class represents the lazy loaded LoginComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'login-cmp',
  templateUrl: 'login.component.html'
})


export class LoginComponent {


  constructor(private auth: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.auth.adminUserObs.subscribe((adminUser) => {this.postSignIn()});
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle();

  }


  private postSignIn(): void {
    this.router.navigate(['/dashboard/home']);
  }
}
