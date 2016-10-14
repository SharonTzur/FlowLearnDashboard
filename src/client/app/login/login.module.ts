import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoginService} from "./login.service";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [LoginService]
})

export class LoginModule {
}
