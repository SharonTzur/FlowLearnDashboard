import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {StudentsComponent} from './students.component';
import {StudentsService} from "../../shared/students/students.service";

@NgModule({
  imports: [RouterModule, BrowserModule],
  declarations: [StudentsComponent],
  exports: [StudentsComponent],
  providers: [StudentsService]
})

export class StudentsModule {
}
