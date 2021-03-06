import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {StudentComponent} from './student.component';
import {StudentsService} from "../../shared/students/students.service";
import {ModalModule, TabsModule} from "ng2-bootstrap";

@NgModule({
    imports: [RouterModule, BrowserModule, ModalModule, TabsModule],
    declarations: [StudentComponent],
    exports: [StudentComponent],
    providers: [StudentsService]
})

export class StudentModule {
}
