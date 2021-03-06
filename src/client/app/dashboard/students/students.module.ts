import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {StudentsComponent} from './students.component';
import {StudentsService} from "../../shared/students/students.service";
import {ModalModule} from "ng2-bootstrap";

@NgModule({
  imports: [RouterModule, BrowserModule, ModalModule],
  declarations: [StudentsComponent],
  exports: [StudentsComponent],
  providers: [StudentsService]
})

export class StudentsModule {
}
