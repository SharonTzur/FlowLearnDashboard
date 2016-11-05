import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FeedbackComponent} from './feedback.component';
import {StudentsService} from "../../shared/students/students.service";
import {ModalModule, TabsModule} from "ng2-bootstrap";
import {FeedbackService} from "./feedback-service";

@NgModule({
    imports: [RouterModule, BrowserModule, ModalModule, TabsModule],
    declarations: [FeedbackComponent],
    exports: [FeedbackComponent],
    providers: [StudentsService, FeedbackService]
})

export class FeedbackModule {
}
